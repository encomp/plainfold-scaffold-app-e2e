import { type Page } from '@playwright/test'
import { resetDB, seedOnboardedState } from './db'

export async function setupOnboarded(
  page: Page,
  options?: Parameters<typeof seedOnboardedState>[1]
): Promise<void> {
  await page.goto('/')
  await resetDB(page)
  await seedOnboardedState(page, options)
}
