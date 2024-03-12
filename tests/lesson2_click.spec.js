// @ts-check
const { test, expect } = require('@playwright/test');

test('click test', async ({ page }) => {
    await page.goto('http://uitestingplayground.com/click');
    await page.locator("#badButton").click();
    await expect(await page.locator("#badButton").getAttribute("class")).toMatch(/btn-success/);
  });