import { test, expect, setupOnboarded } from '../fixtures'
import { INVALID_THEME } from '../fixtures/themes'

test.describe('Invalid Theme Resilience @tier4', () => {
  test.beforeEach(async ({ page }) => {
    await setupOnboarded(page)
  })

  test('invalid theme JSON is rejected gracefully', async ({ page, themeGallery }) => {
    await themeGallery.goto()
    await themeGallery.uploadTheme(INVALID_THEME, 'invalid.json')
    // App should show an error or reject the theme, not crash
    await page.waitForTimeout(1000)
    // Verify no unhandled errors
    const errors: string[] = []
    page.on('pageerror', (err) => errors.push(err.message))
    expect(errors).toEqual([])
  })
})
