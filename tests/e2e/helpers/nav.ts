import { type Page } from '@playwright/test'

const MORE_SHEET_VIEWS = ['settings', 'export-import']

export async function clickNavItem(page: Page, testId: string): Promise<void> {
  const viewport = page.viewportSize()
  const isMobile = viewport !== null && viewport.width < 768

  if (isMobile) {
    const viewName = testId.replace(/^nav-/, '')
    if (MORE_SHEET_VIEWS.includes(viewName)) {
      await page.getByTestId('nav-more').click()
      await page.getByTestId('nav-more-sheet').waitFor({ state: 'visible' })
    }
  }

  await page.getByTestId(testId).click()
}
