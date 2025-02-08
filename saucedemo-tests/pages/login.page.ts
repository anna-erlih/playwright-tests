import { type Locator, type Page } from '@playwright/test';

export class LoginPage {
    readonly page: Page;

    readonly error: Locator;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginBtn: Locator;


    constructor(page: Page){
        this.page = page;

        this.error = page.getByTestId('error')
        this.username = page.getByTestId('username');
        this.password = page.getByTestId('password');
        this.loginBtn = page.getByTestId('login-button');
        
    }

    async goToLoginPage(){
        await this.page.goto('./');
    }

    async logIn(username: string, password: string){
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginBtn.click();
    }
}