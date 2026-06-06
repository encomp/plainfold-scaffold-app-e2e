import { test, expect, setupOnboarded } from '../fixtures'
import { clickNavItem } from '../helpers/nav'

test.describe('Navigation Smoke @tier1', () => {
  test.beforeEach(async ({ page }) => {
    await setupOnboarded(page)
  })

  test('each nav item routes correctly', async ({ page }) => {
    // Navigate to items (or default view)
    await clickNavItem(page, 'nav-items')
    await expect(page.getByTestId('item-list')).toBeVisible()

    // Navigate to settings
    await clickNavItem(page, 'nav-settings')
    await expect(page.getByTestId('settings-page')).toBeVisible()
  })
})
