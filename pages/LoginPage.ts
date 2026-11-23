
import { Page, Locator } from '@playwright/test';

export class LoginPage {

    readonly page: Page;
    readonly phoneInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {

        this.page = page;

        // Locators
        this.phoneInput = page.getByRole('textbox', {
            name: /telefon raqami|phone number/i
        });
        this.passwordInput = page.getByRole('textbox', {
            name: /parol|password/i
        });

        this.loginButton = page.getByRole('button', {
            name: /kirish|sign in/i
        });
    }

    // Actions
    async open() {
        await this.page.goto(
            'https://schoolbus.leadows.com/login',
            { waitUntil: 'domcontentloaded' }
        );
        await this.phoneInput.waitFor({ state: 'visible', timeout: 30000 });
    }

    async enterPhone(phone: string) {
        await this.phoneInput.fill(phone);
    }

    async enterPassword(password: string) {
        await this.passwordInput.fill(password);
    }

    async clickLogin() {
        await this.loginButton.click();
    }
}
