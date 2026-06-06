// EXAMPLE: Replace with your domain entity's responsive tests.

import { test, expect, setupOnboarded } from '../fixtures'

test.describe('Items List Responsive @tier2', () => {
  test.beforeEach(async ({ page }) => {
    await setupOnboarded(page)
  })

  test('desktop shows table layout', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 })
    await page.reload({ waitUntil: 'networkidle' })
    await page.getByTestId('nav-items').click()
    // Assert table/list layout is appropriate for desktop
  })

  test('mobile shows card layout', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.reload({ waitUntil: 'networkidle' })
    // On mobile, PfDataList should switch to card layout
  })
})
