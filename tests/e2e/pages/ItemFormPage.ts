// EXAMPLE: Replace this page object with your domain entity's form page.
// This demonstrates the page object pattern for a form with validation.

import { type Page, type Locator } from '@playwright/test'

export class ItemFormPage {
  readonly page: Page
  readonly form: Locator
  readonly nameInput: Locator
  readonly descriptionInput: Locator
  readonly saveButton: Locator
  readonly cancelButton: Locator

  constructor(page: Page) {
    this.page = page
    this.form = page.getByTestId('item-form')
    this.nameInput = page.getByTestId('item-name-input')
    this.descriptionInput = page.getByTestId('item-description-input')
    this.saveButton = page.getByTestId('item-save')
    this.cancelButton = page.getByTestId('item-cancel')
  }

  async fillAndSave(name: string, description?: string): Promise<void> {
    await this.nameInput.fill(name)
    if (description) {
      await this.descriptionInput.fill(description)
    }
    await this.saveButton.click()
  }

  async getValidationError(): Promise<string | null> {
    const alert = this.page.getByRole('alert')
    if (await alert.isVisible()) {
      return alert.textContent()
    }
    return null
  }
}
