import { test as base, type Page } from '@playwright/test'
import { ThemeGalleryPage } from './pages/ThemeGalleryPage'
import { PreferencesPage } from './pages/PreferencesPage'
import { OnboardingPage } from './pages/OnboardingPage'
import { BackupSnackbarPage } from './pages/BackupSnackbarPage'
import { AutoBackupDialogPage } from './pages/AutoBackupDialogPage'
import { ItemListPage } from './pages/ItemListPage'
import { ItemFormPage } from './pages/ItemFormPage'
import { resetDB, seedOnboardedState } from './helpers/db'

type PfFixtures = {
  themeGallery: ThemeGalleryPage
  preferencesPage: PreferencesPage
  onboardingPage: OnboardingPage
  backupSnackbar: BackupSnackbarPage
  autoBackupDialog: AutoBackupDialogPage
  itemListPage: ItemListPage
  itemFormPage: ItemFormPage
}

export const test = base.extend<PfFixtures>({
  themeGallery: async ({ page }, use) => {
    await use(new ThemeGalleryPage(page))
  },
  preferencesPage: async ({ page }, use) => {
    await use(new PreferencesPage(page))
  },
  onboardingPage: async ({ page }, use) => {
    await use(new OnboardingPage(page))
  },
  backupSnackbar: async ({ page }, use) => {
    await use(new BackupSnackbarPage(page))
  },
  autoBackupDialog: async ({ page }, use) => {
    await use(new AutoBackupDialogPage(page))
  },
  itemListPage: async ({ page }, use) => {
    await use(new ItemListPage(page))
  },
  itemFormPage: async ({ page }, use) => {
    await use(new ItemFormPage(page))
  },
})

export { expect } from '@playwright/test'

export async function setupOnboarded(
  page: Page,
  options?: Parameters<typeof seedOnboardedState>[1]
): Promise<void> {
  await page.goto('/')
  await resetDB(page)
  await seedOnboardedState(page, options)
}
