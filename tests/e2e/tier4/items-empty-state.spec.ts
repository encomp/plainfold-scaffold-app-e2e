// EXAMPLE: Replace with your domain entity's empty state tests.

import { test, expect, setupOnboarded } from '../fixtures'

test.describe('Items Empty State @tier4', () => {
  test.beforeEach(async ({ page }) => {
    await setupOnboarded(page)
  })

  test('no items shows empty state', async ({ itemListPage }) => {
    await itemListPage.goto()
    await expect(itemListPage.emptyState).toBeVisible()
    expect(await itemListPage.getItemCount()).toBe(0)
  })
})
