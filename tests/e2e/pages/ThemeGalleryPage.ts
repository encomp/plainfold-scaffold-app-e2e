import { type Page, type Locator } from '@playwright/test'
import { clickNavItem } from '../helpers/nav'

export class ThemeGalleryPage {
  readonly page: Page
  readonly gallery: Locator
  readonly bundledSection: Locator
  readonly installedSection: Locator
  readonly dropzone: Locator
  readonly previewPanel: Locator
  readonly saveAndApplyButton: Locator
  readonly saveToLibraryButton: Locator
  readonly cancelButton: Locator

  constructor(page: Page) {
    this.page = page
    this.gallery = page.getByTestId('theme-gallery')
    this.bundledSection = page.getByTestId('theme-gallery-bundled')
    this.installedSection = page.getByTestId('theme-gallery-installed')
    this.dropzone = page.getByTestId('theme-dropzone')
    this.previewPanel = page.getByTestId('theme-preview-panel')
    this.saveAndApplyButton = page.getByTestId('theme-save-and-apply-button')
    this.saveToLibraryButton = page.getByTestId('theme-save-to-library-button')
    this.cancelButton = page.getByTestId('theme-preview-cancel')
  }

  async goto(): Promise<void> {
    await clickNavItem(this.page, 'nav-settings')
    await this.gallery.waitFor({ state: 'visible' })
  }

  async uploadTheme(theme: object, filename = 'theme.json'): Promise<void> {
    await this.dropzone.setInputFiles({
      name: filename,
      mimeType: 'application/json',
      buffer: Buffer.from(JSON.stringify(theme)),
    })
  }

  async uploadAndApply(theme: object, filename = 'theme.json'): Promise<void> {
    await this.uploadTheme(theme, filename)
    await this.previewPanel.waitFor({ state: 'visible' })
    await this.saveAndApplyButton.click()
    await this.previewPanel.waitFor({ state: 'hidden' })
  }

  async applyThemeFromGallery(themeId: string): Promise<void> {
    await this.page.getByTestId(`theme-card-apply-${themeId}`).click()
  }

  async removeThemeFromGallery(themeId: string): Promise<void> {
    await this.page.getByTestId(`theme-card-remove-${themeId}`).click()
  }

  async isThemeActive(themeId: string): Promise<boolean> {
    return this.page.getByTestId(`theme-card-active-${themeId}`).isVisible()
  }

  async getCurrentAccent(): Promise<string> {
    return this.page.evaluate(() =>
      getComputedStyle(document.documentElement)
        .getPropertyValue('--pf-color-accent')
        .trim()
    )
  }
}
