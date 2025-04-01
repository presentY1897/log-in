import { expect, test } from "@playwright/test";


test('handle main page routing', async ({ page }) => {
	await page.goto('/');
	await expect(page).toHaveURL('/en/log-in/username');
});
