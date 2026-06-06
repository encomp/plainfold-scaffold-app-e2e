import { test, expect, setupOnboarded } from '../fixtures'

test.describe('PWA Smoke @tier1', () => {
  test('no external requests (offline capable)', async ({ page }) => {
    const externalRequests: string[] = []

    page.on('request', (request) => {
      const url = new URL(request.url())
      if (url.hostname !== 'localhost' && url.hostname !== '127.0.0.1') {
        externalRequests.push(request.url())
      }
    })

    await setupOnboarded(page)
    await page.waitForTimeout(2000)
    expect(externalRequests).toEqual([])
  })
})
