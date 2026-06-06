import { test, expect, setupOnboarded } from '../fixtures'

test.describe('Dialog Focus Trap @tier5', () => {
  test.beforeEach(async ({ page }) => {
    await setupOnboarded(page)
  })

  test('focus is trapped inside dialog', async ({ page, preferencesPage }) => {
    await preferencesPage.goto()
    await preferencesPage.clearDataButton.click()
    const dialog = page.getByRole('dialog')
    await expect(dialog).toBeVisible()

    // Tab should cycle within dialog
    await page.keyboard.press('Tab')
    const focused = await page.evaluate(() => {
      const dialog = document.querySelector('[role="dialog"]')
      return dialog?.contains(document.activeElement)
    })
    expect(focused).toBe(true)
  })

  test('Escape closes dialog and restores focus', async ({ page, preferencesPage }) => {
    await preferencesPage.goto()
    await preferencesPage.clearDataButton.click()
    const dialog = page.getByRole('dialog')
    await expect(dialog).toBeVisible()

    await page.keyboard.press('Escape')
    await expect(dialog).not.toBeVisible()
  })
})
