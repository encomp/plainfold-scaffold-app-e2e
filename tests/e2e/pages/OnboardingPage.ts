import { type Page, type Locator } from '@playwright/test'

export class OnboardingPage {
  readonly page: Page
  readonly wizard: Locator
  readonly nextButton: Locator
  readonly backButton: Locator
  readonly finishButton: Locator
  readonly stepIndicator: Locator

  constructor(page: Page) {
    this.page = page
    this.wizard = page.getByTestId('onboarding-wizard')
    this.nextButton = page.getByTestId('onboarding-next')
    this.backButton = page.getByTestId('onboarding-back')
    this.finishButton = page.getByTestId('onboarding-finish')
    this.stepIndicator = page.getByTestId('onboarding-step-indicator')
  }

  async isVisible(): Promise<boolean> {
    return this.wizard.isVisible()
  }

  async completeAllSteps(): Promise<void> {
    while (await this.nextButton.isVisible()) {
      await this.nextButton.click()
    }
    if (await this.finishButton.isVisible()) {
      await this.finishButton.click()
    }
  }

  async getCurrentStep(): Promise<string | null> {
    return this.stepIndicator.textContent()
  }
}
