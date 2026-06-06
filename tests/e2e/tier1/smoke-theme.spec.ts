import { test, expect, setupOnboarded } from '../fixtures'
import { ROSE_THEME } from '../fixtures/themes'

test.describe('Theme Smoke @tier1', () => {
  test.beforeEach(async ({ page }) => {
    await setupOnboarded(page)
  })

  test('applying a theme changes CSS variables', async ({ page, themeGallery }) => {
    await themeGallery.goto()
    await themeGallery.uploadAndApply(ROSE_THEME, 'rose.json')
    expect(await themeGallery.getCurrentAccent()).toBe('#f472b6')
  })

  test('applied theme persists across reload', async ({ page, themeGallery }) => {
    await themeGallery.goto()
    await themeGallery.uploadAndApply(ROSE_THEME, 'rose.json')
    await page.reload({ waitUntil: 'networkidle' })
    expect(await themeGallery.getCurrentAccent()).toBe('#f472b6')
  })
})
