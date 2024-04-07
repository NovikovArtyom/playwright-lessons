const { test, expect } = require("@playwright/test");

test("Поиск по сайту (пустая выдача)", async ({ page }) => {
    await acceptCoockie(page);
    await incorrectSearch(page);
  // запомнили первую карточку товара
    await expect(page.locator("h1").first()).toHaveText("Мы ничего не нашли по вашему запросу! Что делать?")
    await page.goto("https://www.labirint.ru/cart");
    await expect(page.locator("#basket-step1-default .g-alttext-small.g-alttext-grey.g-alttext-head").first()).toHaveText("ВАША КОРЗИНА ПУСТА. ПОЧЕМУ?", {ignoreCase: true})
});

test('Проверка на пустую корзину', async ({ page }) => {
    await acceptCoockie(page);

    await incorrectSearch(page);
  
    await expect(page.locator('#search h1').first()).toHaveText('Мы ничего не нашли по вашему запросу! Что делать?');
    await page.locator("//ul/li[6]/a/span/span[1]").click();
    await expect(page.locator('#basket-step1-default span').first()).toHaveText('Ваша корзина пуста. Почему?');
  });

  async function acceptCoockie(page){
    await page.goto("https://www.labirint.ru");
    await page.locator('.cookie-policy button').click();
  }

  async function incorrectSearch(page){
    await page.locator('#search-field').fill('Эйяфьядлайёкюдль');
    await page.keyboard.press('Enter');
  }