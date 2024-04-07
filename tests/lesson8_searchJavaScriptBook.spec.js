const { test, expect } = require("@playwright/test");
const {MainPage} = require('../pages/mainPage'); 


test("Поиск по сайту", async ({ page }) => {
    const mainPage = new MainPage(page); 
    mainPage.openPage(); 
    mainPage.searchFor("Javascript");
  
    const card = page.locator(".product-card").first();
    const price = (await card.locator(".product-card__price-current").textContent()).trim();
    await card.locator(".buy-link").click();
    await openCart(page)
    await expect(page.locator(".b-dotted-im-e-val").last()).toHaveText(price);
  });