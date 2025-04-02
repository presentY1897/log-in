import { EmailUtils } from "@/utils/utils";
import { expect, test } from "@playwright/test";

test("handle log in username", async ({ page }) => {
  await page.goto("/en/log-in/username");

  const usernameInput = page.getByTestId("username-input");
  await usernameInput.fill("testuser");
  expect(usernameInput).toHaveValue("testuser");

  const submitButton = page.getByTestId("username-submit-button");
  await submitButton.click();
  await expect(page).toHaveURL("/en/log-in/password");

  const username = await page.evaluate(
    () => localStorage.getItem("username") || ""
  );
  const email = await page.evaluate(() => localStorage.getItem("email") || "");

  expect(username).toBe("testuser");
  expect(email).toBe("testuser@" + EmailUtils.defaultEmail);
});

test("handle log in password page: username fail", async ({ page }) => {
  await page.goto("/en/log-in/password");

  const passwordInput = page.getByTestId("password-input");
  await passwordInput.fill("testpassword");
  await page.evaluate(() => localStorage.setItem("username", "#"));

  const submitButton = page.getByTestId("password-submit-button");
  await submitButton.click();
  await expect(page).toHaveURL("/en/log-in/username");
});

test("handle log in password page: email fail", async ({ page }) => {
  await page.goto("/en/log-in/password");

  const passwordInput = page.getByTestId("password-input");
  await passwordInput.fill("testpassword");
  await page.evaluate(() => localStorage.setItem("email", "aa"));

  const submitButton = page.getByTestId("password-submit-button");
  await submitButton.click();
  await expect(page).toHaveURL("/en/log-in/username");
});

test("handle log in password page: password fail", async ({ page }) => {
  await page.goto("/en/log-in/password");

  const passwordInput = page.getByTestId("password-input");
  await passwordInput.fill("testpassword");
  await page.evaluate(() => localStorage.setItem("username", "test"));
  await page.evaluate(() => localStorage.setItem("email", "test@test.com"));

  const submitButton = page.getByTestId("password-submit-button");
  await submitButton.click();

  const passwordError = page.getByTestId("password-error");
  await expect(passwordError).toBeVisible();

  await passwordInput.clear();
  await passwordInput.fill("testpassword1@");
  await submitButton.click();
  await expect(page).toHaveURL("/en/user-info");
});

test("handle log out", async ({ page }) => {
  await page.goto("/en/log-in/password");
  await page.evaluate(() => localStorage.setItem("username", "test"));
  await page.evaluate(() => localStorage.setItem("email", "test@test.com"));

  const passwordInput = page.getByTestId("password-input");
  await passwordInput.fill("testpassword1@");
  const submitButton = page.getByTestId("password-submit-button");
  await submitButton.click();

  await expect(page).toHaveURL("/en/user-info");
  await page.goto("/");
  await expect(page).toHaveURL("/en/user-info");

  const logOutButton = page.getByTestId("logout-button");
  await logOutButton.click();
  await expect(page).toHaveURL("/en/log-in/username");
});
