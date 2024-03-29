const { test, expect } = require('@playwright/test');
test('Как загружается страница?', async ({ page }) => {
  await page.goto("https://habr.com/ru/feed/");
    
  await expect(page.locator("#app h1")).toHaveText("Моя лента");
});