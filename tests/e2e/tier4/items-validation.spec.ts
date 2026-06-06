// EXAMPLE: Replace with your domain entity's validation tests.

import { test, expect, setupOnboarded } from '../fixtures'

test.describe('Items Validation @tier4', () => {
  test.beforeEach(async ({ page }) => {
    await setupOnboarded(page)
  })

  test('empty name shows validation error', async ({ itemListPage, itemFormPage }) => {
    await itemListPage.goto()
    await itemListPage.clickAdd()
    await itemFormPage.fillAndSave('')
    const error = await itemFormPage.getValidationError()
    expect(error).toBeTruthy()
  })
})
