const { test, expect } = require('@playwright/test');
test('Как работают таймауты?', async ({ page }) => {
  await page.goto("http://uitestingplayground.com/ajax");
      
  
  await page.locator("#ajaxButton").click();
  await expect(page.locator("#content p")).toHaveText("Data loaded with AJAX get request.", {timeout:16000});
});