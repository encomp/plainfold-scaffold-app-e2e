import { test, expect, setupOnboarded } from '../fixtures'

test.describe('Navigation Keyboard @tier5', () => {
  test.beforeEach(async ({ page }) => {
    await setupOnboarded(page)
  })

  test('tab navigates through nav items', async ({ page }) => {
    // Focus the nav area and tab through items
    await page.keyboard.press('Tab')
    const focused = await page.evaluate(() => document.activeElement?.getAttribute('data-testid'))
    // Should focus on a nav item
    expect(focused).toBeTruthy()
  })

  test('Enter key activates nav item', async ({ page }) => {
    const navItem = page.getByTestId('nav-settings')
    await navItem.focus()
    await page.keyboard.press('Enter')
    await expect(page.getByTestId('settings-page')).toBeVisible()
  })
})
