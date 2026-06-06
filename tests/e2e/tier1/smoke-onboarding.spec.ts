import { test, expect } from '../fixtures'
import { resetDB } from '../helpers/db'

test.describe('Onboarding Smoke @tier1', () => {
  test('fresh app shows onboarding wizard', async ({ page, onboardingPage }) => {
    await page.goto('/')
    await resetDB(page)
    await page.goto('/')
    await expect(onboardingPage.wizard).toBeVisible()
  })

  test('completing wizard redirects to main app', async ({ page, onboardingPage }) => {
    await page.goto('/')
    await resetDB(page)
    await page.goto('/')
    await onboardingPage.completeAllSteps()
    await expect(onboardingPage.wizard).not.toBeVisible()
  })
})
