const { test, expect } = require('@playwright/test');

test('count elements in list', async ({ page }) => {
  await page.goto('https://sky-todo-list.herokuapp.com/', {waitUntil: "networkidle"});
  const doElements = await page.locator('tr > td').count();    
  console.log(doElements);  
});