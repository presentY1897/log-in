import { expect, test } from "@playwright/test";

test("handle sign up username", async ({ page }) => {
  await page.goto("/en/sign-up/username");

  const usernameInput = page.getByTestId("username-input");
  await usernameInput.fill("test@test.com");

  const submitButton = page.getByTestId("username-submit");
  await submitButton.click();
  await expect(page).toHaveURL("/en/sign-up/username");

	usernameInput.clear();
	await usernameInput.fill("testuser@no-use.email");
  await submitButton.click();
  await expect(page).toHaveURL("/en/sign-up/password");
});
