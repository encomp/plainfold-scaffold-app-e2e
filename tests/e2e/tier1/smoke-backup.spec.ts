import { test, expect, setupOnboarded } from '../fixtures'
import { clickNavItem } from '../helpers/nav'

test.describe('Backup Smoke @tier1', () => {
  test.beforeEach(async ({ page }) => {
    await setupOnboarded(page)
  })

  test('export button triggers file download', async ({ page }) => {
    await clickNavItem(page, 'nav-settings')
    const exportButton = page.getByTestId('export-button')
    await exportButton.waitFor({ state: 'visible' })

    const [download] = await Promise.all([
      page.waitForEvent('download'),
      exportButton.click(),
    ])

    expect(download.suggestedFilename()).toMatch(/\.json$/)
  })
})
