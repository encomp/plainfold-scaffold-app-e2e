// EXAMPLE: Replace with your domain entity's i18n tests.

import { test, expect, setupOnboarded } from '../fixtures'
import { clickNavItem } from '../helpers/nav'

test.describe('Items i18n @tier3', () => {
  test.beforeEach(async ({ page }) => {
    await setupOnboarded(page)
  })

  test('item labels display in Spanish', async ({ page }) => {
    await clickNavItem(page, 'nav-settings')
    const switcher = page.getByTestId('language-switcher')
    await switcher.selectOption('es')
    await page.waitForTimeout(500)
    // Navigate to items and check translated labels
    // Depends on actual translation keys
  })
})
