
import { test, expect } from '@playwright/test';
import { Password } from '../pages/Password';

test('click forgot password link', async ({ page }) => {
  const passwordPage = new Password(page);

  await passwordPage.goto();
  await passwordPage.clickForgotPassword();

  await expect(page).toHaveURL('/web/index.php/auth/requestPasswordResetCode');
});

test('reset password cancel', async ({ page }) => {
    const passwordPage = new Password(page);

  await passwordPage.goto();
  await passwordPage.clickForgotPassword();
  await passwordPage.clickCancel();

  await expect(page).toHaveURL('/web/index.php/auth/login');
});

test('password reset successfully', async ({ page }) => {
  const passwordPage = new Password(page);
    await passwordPage.goto();
    await passwordPage.clickForgotPassword();
    await passwordPage.resetPassword('Admin');

});


