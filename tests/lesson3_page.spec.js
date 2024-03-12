const { test, expect } = require('@playwright/test');

test('url and title', async ({ page }) => {
  await page.goto('http://habr.com/ru');
      
  // >>>>> дополнить код здесь
  await expect(page).toHaveURL('https://habr.com/ru/feed/');
  await expect(page).toHaveTitle('Публикации / Моя лента / Хабр');
  // <<<<<
    
});