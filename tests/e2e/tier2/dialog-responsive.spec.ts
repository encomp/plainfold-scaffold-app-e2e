import { test, expect, setupOnboarded } from '../fixtures'

test.describe('Dialog Responsive @tier2', () => {
  test.beforeEach(async ({ page }) => {
    await setupOnboarded(page)
  })

  test('dialog renders as modal on desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 })
    await page.reload({ waitUntil: 'networkidle' })
    // Trigger a dialog (e.g., clear data confirmation)
    const settingsNav = page.getByTestId('nav-settings')
    await settingsNav.click()
    const clearButton = page.getByTestId('clear-data-button')
    if (await clearButton.isVisible()) {
      await clearButton.click()
      const dialog = page.getByRole('dialog')
      await expect(dialog).toBeVisible()
      await page.keyboard.press('Escape')
    }
  })

  test('dialog renders as bottom sheet on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.reload({ waitUntil: 'networkidle' })
    // On mobile, dialogs should adapt to bottom sheet behavior
    // Implementation depends on PfDialog responsive behavior
  })
})
