import { type Page, type Locator } from '@playwright/test'
import { clickNavItem } from '../helpers/nav'

export class PreferencesPage {
  readonly page: Page
  readonly settingsPage: Locator
  readonly themeSection: Locator
  readonly languageSection: Locator
  readonly backupSection: Locator
  readonly dangerZone: Locator
  readonly clearDataButton: Locator
  readonly confirmClearButton: Locator

  constructor(page: Page) {
    this.page = page
    this.settingsPage = page.getByTestId('settings-page')
    this.themeSection = page.getByTestId('settings-section-theme')
    this.languageSection = page.getByTestId('settings-section-language')
    this.backupSection = page.getByTestId('settings-section-backup')
    this.dangerZone = page.getByTestId('settings-danger-zone')
    this.clearDataButton = page.getByTestId('clear-data-button')
    this.confirmClearButton = page.getByTestId('confirm-clear-button')
  }

  async goto(): Promise<void> {
    await clickNavItem(this.page, 'nav-settings')
    await this.settingsPage.waitFor({ state: 'visible' })
  }

  async clearAllData(): Promise<void> {
    await this.clearDataButton.click()
    await this.confirmClearButton.waitFor({ state: 'visible' })
    await this.confirmClearButton.click()
  }
}
