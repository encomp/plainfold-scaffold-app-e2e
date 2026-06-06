import { type Page } from '@playwright/test'

export async function resetDB(page: Page): Promise<void> {
  await page.evaluate(async () => {
    const dbs = await indexedDB.databases()
    for (const db of dbs) {
      if (db.name) {
        await new Promise<void>((resolve, reject) => {
          const req = indexedDB.deleteDatabase(db.name!)
          req.onsuccess = () => resolve()
          req.onerror = () => reject(new Error(`Failed to delete ${db.name}`))
          req.onblocked = () => {
            req.onsuccess = () => resolve()
          }
        })
      }
    }
  })
  await page.reload({ waitUntil: 'networkidle' })
}

export async function seedOnboardedState(
  page: Page,
  options: { name?: string } = {}
): Promise<void> {
  await page.evaluate(async ({ name }) => {
    // Mark onboarding as completed via the store
    // The scaffold app uses pf:onboarding:completed key
    const req = indexedDB.open('PfStoreDB', 1)
    await new Promise<void>((resolve) => {
      req.onupgradeneeded = () => {
        const db = req.result
        if (!db.objectStoreNames.contains('kv')) {
          db.createObjectStore('kv')
        }
      }
      req.onsuccess = () => {
        const db = req.result
        const tx = db.transaction('kv', 'readwrite')
        const store = tx.objectStore('kv')
        store.put(true, 'pf:onboarding:completed')
        if (name) {
          store.put(name, 'pf:onboarding:name')
        }
        tx.oncomplete = () => {
          db.close()
          resolve()
        }
      }
    })
  }, { name: options.name ?? 'Test User' })
  await page.reload({ waitUntil: 'networkidle' })
}

export async function seedSettings(
  page: Page,
  key: string,
  value: unknown
): Promise<void> {
  await page.evaluate(async ({ key, value }) => {
    const req = indexedDB.open('PfStoreDB', 1)
    await new Promise<void>((resolve) => {
      req.onupgradeneeded = () => {
        const db = req.result
        if (!db.objectStoreNames.contains('kv')) {
          db.createObjectStore('kv')
        }
      }
      req.onsuccess = () => {
        const db = req.result
        const tx = db.transaction('kv', 'readwrite')
        tx.objectStore('kv').put(value, key)
        tx.oncomplete = () => {
          db.close()
          resolve()
        }
      }
    })
  }, { key, value })
}
