import { test, expect, setupOnboarded } from '../fixtures'
import { clickNavItem } from '../helpers/nav'
import { seedSettings } from '../helpers/db'

test.describe('Locale Switching @tier3', () => {
  test.beforeEach(async ({ page }) => {
    await setupOnboarded(page)
  })

  test('switching to Spanish updates UI labels', async ({ page }) => {
    await clickNavItem(page, 'nav-settings')
    const switcher = page.getByTestId('language-switcher')
    await switcher.selectOption('es')
    await page.waitForTimeout(500)
    const title = await page.getByTestId('settings-page-title').textContent()
    expect(title).not.toBe('Settings')
  })

  test('locale persists across page reload', async ({ page }) => {
    await clickNavItem(page, 'nav-settings')
    const switcher = page.getByTestId('language-switcher')
    await switcher.selectOption('es')
    await page.waitForTimeout(500)
    const titleBefore = await page.getByTestId('settings-page-title').textContent()

    await page.reload({ waitUntil: 'networkidle' })
    await clickNavItem(page, 'nav-settings')
    const titleAfter = await page.getByTestId('settings-page-title').textContent()
    expect(titleAfter).toBe(titleBefore)
  })

  test('round-trip switching preserves state', async ({ page }) => {
    await clickNavItem(page, 'nav-settings')
    const switcher = page.getByTestId('language-switcher')
    await switcher.selectOption('es')
    await page.waitForTimeout(300)
    await switcher.selectOption('en')
    await page.waitForTimeout(300)
    const title = await page.getByTestId('settings-page-title').textContent()
    expect(title).toBe('Settings')
  })
})
