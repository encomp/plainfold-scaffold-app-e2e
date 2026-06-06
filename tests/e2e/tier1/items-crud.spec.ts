// EXAMPLE: Replace with your domain entity's CRUD tests.

import { test, expect, setupOnboarded } from '../fixtures'

test.describe('Items CRUD @tier1', () => {
  test.beforeEach(async ({ page }) => {
    await setupOnboarded(page)
  })

  test('add a new item', async ({ itemListPage, itemFormPage }) => {
    await itemListPage.goto()
    await itemListPage.clickAdd()
    await itemFormPage.fillAndSave('Test Item', 'Test description')
    expect(await itemListPage.getItemCount()).toBe(1)
  })

  test('delete an item', async ({ itemListPage, itemFormPage }) => {
    await itemListPage.goto()
    await itemListPage.clickAdd()
    await itemFormPage.fillAndSave('Item to delete')
    expect(await itemListPage.getItemCount()).toBe(1)
    await itemListPage.deleteItem(0)
    expect(await itemListPage.getItemCount()).toBe(0)
  })
})
