// EXAMPLE: Replace with your domain entity's search/filter tests.

import { test, expect, setupOnboarded } from '../fixtures'

test.describe('Items Search @tier1', () => {
  test.beforeEach(async ({ page }) => {
    await setupOnboarded(page)
  })

  test('search filters items by name', async ({ itemListPage, itemFormPage }) => {
    await itemListPage.goto()

    // Add two items
    await itemListPage.clickAdd()
    await itemFormPage.fillAndSave('Apple')
    await itemListPage.clickAdd()
    await itemFormPage.fillAndSave('Banana')

    // Search for "Apple"
    await itemListPage.searchItems('Apple')
    expect(await itemListPage.getItemCount()).toBe(1)
  })
})
