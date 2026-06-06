import { test, expect, setupOnboarded } from '../fixtures'

test.describe('Clear Data Resilience @tier4', () => {
  test.beforeEach(async ({ page }) => {
    await setupOnboarded(page)
  })

  test('confirm clears all data and shows onboarding', async ({ page, preferencesPage, onboardingPage }) => {
    await preferencesPage.goto()
    await preferencesPage.clearAllData()
    await page.waitForTimeout(1000)
    // After clearing, the app should show onboarding
    await page.reload({ waitUntil: 'networkidle' })
    await expect(onboardingPage.wizard).toBeVisible()
  })
})
