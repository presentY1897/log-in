import { expect, test } from '@playwright/test';

test('handle i18n routing', async ({ page }) => {
	await page.goto('/');
	await expect(page).toHaveURL('/en');

	// locale not found
	await page.goto('/log-in');
	await expect(page).toHaveURL('/en/log-in');
});