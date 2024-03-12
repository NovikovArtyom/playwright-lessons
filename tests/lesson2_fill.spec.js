// @ts-check
const { test, expect } = require('@playwright/test');

test('sign in test', async({page}) => {
    const login = 'testlogin';
    const password = 'pwd';
  
    await page.goto('http://uitestingplayground.com/sampleapp');
    await page.locator('[name="UserName"]').fill(login);
    await page.locator('[name="Password"]').fill(password);
    await page.locator('#login').click();
  
    await expect(page.locator('#loginstatus')).toContainText('testlogin');
  });