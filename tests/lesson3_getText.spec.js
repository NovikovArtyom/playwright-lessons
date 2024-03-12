const { test, expect } = require('@playwright/test');

test('expect page text', async ({ page}) => {
    await page.goto('https://inzhenerka.tech/');
    await expect(page.locator('h1')).toContainText('ИнженеркаТех');
    await expect(page.locator('[field="descr"]').first()).toHaveText('Помогаем инженерам повысить свою квалификацию на рынке труда и приобрести навыки международного уровня');
});