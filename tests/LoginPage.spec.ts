
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/Loginpages';

test('login with valid credentials', async ({ page }) => {
  const username = process.env.ORANGEHRM_USERNAME;
  const password = process.env.ORANGEHRM_PASSWORD;

  if (!username || !password) {
    throw new Error(
      'Missing ORANGEHRM_USERNAME or ORANGEHRM_PASSWORD'
    );
  }

  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login(username, password);

  await expect(page).toHaveURL(/dashboard/);
});

test('login with invalid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('Admin', 'wrongpassword');

  await expect(
    page.locator('.oxd-alert-content-text')
  ).toHaveText('Invalid credentials');
});
