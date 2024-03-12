// @ts-check
const { test, expect } = require('@playwright/test');

test('hover test', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/hovers');

    const firstImage = page.locator('.figure').first();
    const secondImage = page.locator('.figure').nth(1);
    const thirdImage = page.locator('.figure').nth(2);

    const firstUser = firstImage.locator('.figcaption h5');
    const secondUser = secondImage.locator('.figcaption h5');
    const thirdUser = thirdImage.locator('.figcaption h5');

    await firstImage.hover();
    await expect(firstUser).toBeVisible();
    await expect(firstUser).toHaveText('name: user1');

    await secondImage.hover();
    await expect(secondUser).toBeVisible();
    await expect(secondUser).toHaveText('name: user2');

    await thirdImage.hover();
    await expect(thirdUser).toBeVisible();
    await expect(thirdUser).toHaveText('name: user3');
}); 