import { expect, type Locator, type Page } from '@playwright/test';

export class LoginPage {
    readonly page: Page;

    readonly username: Locator;
    readonly password: Locator;
    readonly loginBtn: Locator;
    public readonly loggedInPageTitle: Locator;

    constructor(page: Page){
        this.page = page;
        this.username = page.getByPlaceholder('Username');
        this.password = page.getByPlaceholder('Password');
        this.loginBtn = page.getByText('Login');
        this.loggedInPageTitle = page.getByTitle('Products');
    }

    async goToLoginPage(){
        await this.page.goto('https://www.saucedemo.com/');
    }

    async logIn(username: string, password: string){
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginBtn.click();
    }
}