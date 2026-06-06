import { test, expect, setupOnboarded } from '../fixtures'
import { clickNavItem } from '../helpers/nav'

test.describe('i18n Smoke @tier1', () => {
  test.beforeEach(async ({ page }) => {
    await setupOnboarded(page)
  })

  test('switching language changes visible labels', async ({ page }) => {
    await clickNavItem(page, 'nav-settings')
    const languageSwitcher = page.getByTestId('language-switcher')
    await languageSwitcher.waitFor({ state: 'visible' })
    await languageSwitcher.selectOption('es')
    await page.waitForTimeout(500)
    // Verify at least one label changed to Spanish
    const settingsHeading = page.getByTestId('settings-page-title')
    const text = await settingsHeading.textContent()
    expect(text).not.toBe('Settings')
  })
})
