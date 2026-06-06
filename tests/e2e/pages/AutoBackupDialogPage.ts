import { type Page, type Locator } from '@playwright/test'

export class AutoBackupDialogPage {
  readonly page: Page
  readonly dialog: Locator
  readonly exportButton: Locator
  readonly skipButton: Locator

  constructor(page: Page) {
    this.page = page
    this.dialog = page.getByTestId('auto-backup-dialog')
    this.exportButton = page.getByTestId('auto-backup-export')
    this.skipButton = page.getByTestId('auto-backup-skip')
  }

  async isVisible(): Promise<boolean> {
    return this.dialog.isVisible()
  }

  async skip(): Promise<void> {
    await this.skipButton.click()
    await this.dialog.waitFor({ state: 'hidden' })
  }
}
