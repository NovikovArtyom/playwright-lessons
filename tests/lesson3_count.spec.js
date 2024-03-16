const { test, expect } = require('@playwright/test');

const url = (c) => `https://www.ebay.com/sch/i.html?_nkw=nike&_ipg=${c}`;

test('Проверяем, что на странице 120 товаров', async ({ page }) => {
   await page.goto(url(120));
   await expect(page.locator('ul.srp-results > li.s-item[data-viewport]')).toHaveCount(120);
   await page.goto(url(240));
   await expect(page.locator('ul.srp-results > li.s-item[data-viewport]')).toHaveCount(240);
});