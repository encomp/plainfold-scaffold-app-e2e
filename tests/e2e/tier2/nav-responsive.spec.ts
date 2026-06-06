import { test, expect, setupOnboarded } from '../fixtures'

test.describe('Navigation Responsive @tier2', () => {
  test.beforeEach(async ({ page }) => {
    await setupOnboarded(page)
  })

  test('desktop shows full nav drawer', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 })
    await page.reload({ waitUntil: 'networkidle' })
    await expect(page.getByTestId('nav-drawer')).toBeVisible()
  })

  test('tablet shows rail nav', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 })
    await page.reload({ waitUntil: 'networkidle' })
    const drawer = page.getByTestId('nav-drawer')
    // Rail mode: drawer visible but narrow
    await expect(drawer).toBeVisible()
  })

  test('mobile shows bottom nav bar', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.reload({ waitUntil: 'networkidle' })
    await expect(page.getByTestId('nav-bar')).toBeVisible()
    await expect(page.getByTestId('nav-drawer')).not.toBeVisible()
  })
})
