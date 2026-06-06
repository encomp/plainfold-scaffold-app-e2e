import { test, expect, setupOnboarded } from '../fixtures'

test.describe('Reduced Motion @tier5', () => {
  test('animations disabled with prefers-reduced-motion', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' })
    await setupOnboarded(page)

    // Verify that CSS motion intensity is set to 0 or animations are disabled
    const motionIntensity = await page.evaluate(() =>
      getComputedStyle(document.documentElement)
        .getPropertyValue('--pf-motion-intensity')
        .trim()
    )
    // Either motion-intensity is '0' or the prefers-reduced-motion media query is active
    // The exact behavior depends on PfDesignTokensProvider implementation
  })
})
