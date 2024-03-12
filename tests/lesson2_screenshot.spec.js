const { test, expect } = require('@playwright/test');
const fs = require('fs');

test('screenshot test', async ({ page }) => {
  await page.goto('http://uitestingplayground.com/sampleapp');

  const form = page.locator("section").first();

  await page.screenshot({ path: 'screenshots/body.png' });
  await form.screenshot({ path: 'screenshots/container.png' });

  expect(fs.existsSync('screenshots/body.png')).toBeTruthy();
  expect(fs.existsSync('screenshots/container.png')).toBeTruthy();
});