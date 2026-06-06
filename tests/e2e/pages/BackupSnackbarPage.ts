import { type Page, type Locator } from '@playwright/test'

export class BackupSnackbarPage {
  readonly page: Page
  readonly snackbar: Locator
  readonly exportButton: Locator
  readonly dismissButton: Locator

  constructor(page: Page) {
    this.page = page
    this.snackbar = page.getByTestId('backup-snackbar')
    this.exportButton = page.getByTestId('backup-snackbar-export')
    this.dismissButton = page.getByTestId('backup-snackbar-dismiss')
  }

  async isVisible(): Promise<boolean> {
    return this.snackbar.isVisible()
  }

  async dismiss(): Promise<void> {
    await this.dismissButton.click()
    await this.snackbar.waitFor({ state: 'hidden' })
  }
}
