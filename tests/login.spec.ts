
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { loginData } from '../test-data/loginData';

test('Verify successful School Bus login', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();
    await expect(loginPage.phoneInput).toBeVisible();
    await expect(loginPage.passwordInput).toBeVisible();
    await expect(loginPage.loginButton).toBeVisible();

    await loginPage.enterPhone(loginData.validLogin.phone!);
    await loginPage.enterPassword(loginData.validLogin.password!);
    await loginPage.clickLogin();

    await expect(page).not.toHaveURL(/\/login(?:[?#]|$)/);
});
