
import { Page, Locator } from '@playwright/test';

export class Password
 {
  readonly page: Page;
  readonly forgotPasswordLink: Locator;
  readonly cancelButton: Locator;
  readonly usernameInput: Locator;
  readonly resetPasswordButton: Locator;
  

  constructor(page: Page) {
    this.page = page;

    this.forgotPasswordLink = (page.getByText("Forgot your password?"));
    this.cancelButton = page.getByRole('button', { name: 'Cancel' });
    this.usernameInput = page.getByPlaceholder('Username');
    this.resetPasswordButton = page.getByRole('button', { name: 'Reset Password' });
  }

  async goto() {
    await this.page.goto('/web/index.php/auth/login');
  }

  async clickForgotPassword() {
    await this.forgotPasswordLink.click();
  }

  async clickCancel() {
    await this.cancelButton.click();
  }

  async resetPassword(username: string) {
    await this.usernameInput.fill(username);
    await this.resetPasswordButton.click();
  }
}
