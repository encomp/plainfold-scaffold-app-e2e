// EXAMPLE: Replace this page object with your domain entity's list page.
// This demonstrates the page object pattern for a list view with CRUD.

import { type Page, type Locator } from '@playwright/test'

export class ItemListPage {
  readonly page: Page
  readonly list: Locator
  readonly addButton: Locator
  readonly searchInput: Locator
  readonly emptyState: Locator

  constructor(page: Page) {
    this.page = page
    this.list = page.getByTestId('item-list')
    this.addButton = page.getByTestId('item-add-button')
    this.searchInput = page.getByTestId('item-search')
    this.emptyState = page.getByTestId('item-empty-state')
  }

  async goto(): Promise<void> {
    await this.page.getByTestId('nav-items').click()
    await this.list.waitFor({ state: 'visible' })
  }

  async getItemCount(): Promise<number> {
    return this.page.getByTestId('item-row').count()
  }

  async clickAdd(): Promise<void> {
    await this.addButton.click()
  }

  async deleteItem(index: number): Promise<void> {
    await this.page.getByTestId('item-row').nth(index).getByTestId('item-delete').click()
  }

  async searchItems(query: string): Promise<void> {
    await this.searchInput.fill(query)
  }
}
