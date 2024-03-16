const { test, expect } = require('@playwright/test');

test('litres test', async ({ page }) => {
  await page.goto('https://www.litres.ru');
  const searchInput = page.getByTestId('header__search-input--desktop');
  const findButton = page.getByTestId('header__search-button--desktop');
  const expectLabel = page.getByTestId('search-title__wrapper');
  await searchInput.fill('javascript');
  await findButton.click();
  await expect(expectLabel).toContainText('javascript');
});