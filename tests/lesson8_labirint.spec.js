const { test, expect } = require('@playwright/test');
test('Проверка на пустую корзину', async ({ page }) => {
  await page.goto("https://www.labirint.ru");
  const coockiePolicy = page.locator('.cookie-policy');
  await coockiePolicy.locator('button').click();

  await page.locator('#search-field').fill('Эйяфьядлайёкюдль');
  await page.keyboard.press('Enter');

  await expect(page.locator('#search h1').first()).toHaveText('Мы ничего не нашли по вашему запросу! Что делать?');
  await page.locator("//ul/li[6]/a/span/span[1]").click();
  await expect(page.locator('#basket-step1-default span').first()).toHaveText('Ваша корзина пуста. Почему ?');
});