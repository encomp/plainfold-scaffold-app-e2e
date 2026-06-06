// EXAMPLE: Replace with your domain entity's form accessibility tests.

import { test, expect, setupOnboarded } from '../fixtures'

test.describe('Items Form Accessibility @tier5', () => {
  test.beforeEach(async ({ page }) => {
    await setupOnboarded(page)
  })

  test('form inputs have associated labels', async ({ page, itemListPage }) => {
    await itemListPage.goto()
    await itemListPage.clickAdd()
    // All inputs should have associated labels
    const inputsWithoutLabels = await page.evaluate(() => {
      const inputs = document.querySelectorAll('input, select, textarea')
      return Array.from(inputs).filter(
        (input) => !input.getAttribute('aria-label') && !input.getAttribute('aria-labelledby') && !document.querySelector(`label[for="${input.id}"]`)
      ).length
    })
    expect(inputsWithoutLabels).toBe(0)
  })
})
