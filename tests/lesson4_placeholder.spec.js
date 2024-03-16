const { test, expect } = require('@playwright/test');

test('use placeholder', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  const login = 'standard_user';
  const password = 'secret_sauce';

  const loginInput = page.getByPlaceholder('Username');
  const passwordInput = page.getByPlaceholder('Password');
  const submitButton = page.locator('#login-button');

  await loginInput.fill(login);
  await passwordInput.fill(password);
  await submitButton.click();
});