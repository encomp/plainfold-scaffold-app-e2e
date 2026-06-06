// EXAMPLE: Replace with your domain entity's form responsive tests.

import { test, expect, setupOnboarded } from '../fixtures'

test.describe('Items Form Responsive @tier2', () => {
  test.beforeEach(async ({ page }) => {
    await setupOnboarded(page)
  })

  test('form adapts to mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.reload({ waitUntil: 'networkidle' })
    // Verify form layout adapts for mobile
  })
})
