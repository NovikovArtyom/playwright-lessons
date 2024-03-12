const { test, expect } = require('@playwright/test');

test('Проверяем, что на странице 120 товаров', async ({ page }) => {
   await page.goto('https://www.ebay.com/sch/i.html?_nkw=nike&_ipg=120');
   await expect(page.locator('img')).toHaveCount(120);
});

test('Проверяем, что на странице 240 товаров', async ({ page }) => {
    await page.goto('https://www.ebay.com/sch/i.html?_nkw=nike&_ipg=240');
    await expect(page.locator('img')).toHaveCount(120);
});