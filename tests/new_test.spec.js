const { test, expect } = require('@playwright/test');
test('Проверяем, что у поля Откуда выпадает подсказка', async ({ page }) => {
  await page.goto('https://www.rzd.ru');
      
  
  await page.locator("#direction-form").fill("Москва");
  await expect(page.locator(".rzd-suggestion-block").first()).toBeVisible();
});

test('Проверяем пустой результат поиска на сайте', async ({ page }) => {
    await page.goto('https://www.selenium.dev/documentation/');
        
    await page.locator(".DocSearch-Button-Placeholder").first().click()
    await page.locator("#docsearch-input").fill("playwright")
    
    await expect(page.locator(".DocSearch-Title")).toHaveText('No results for "playwright"');
  });