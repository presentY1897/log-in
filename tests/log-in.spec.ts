import { expect, test } from '@playwright/test';


test('handle log in username', async ({ page })=> {
	await page.goto('/en/log-in/username');

	const usernameInput = page.getByTestId('username-input');
	await usernameInput.fill('testuser');
	expect(usernameInput).toHaveValue('testuser');

	const submitButton = page.getByTestId('username-submit-button');
	await submitButton.click();
	await expect(page).toHaveURL('/en/log-in/password');

	const username = await page.evaluate(() => 		localStorage.getItem('username') || '');
	const email = await page.evaluate(() =>localStorage.getItem('email') || '');

	expect(username).toBe('testuser');
	expect(email).toBe('testuser@gmail.com');
});