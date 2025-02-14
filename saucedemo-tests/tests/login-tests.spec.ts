import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { ProductPage } from '../pages/product.page';
import usersJson from '../test-data/users.json';

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goToLoginPage();
});


test('Log in successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.logIn(usersJson.userValid.username, usersJson.userValid.password);
  const productPage = new ProductPage(page);
  await expect(productPage.title).toHaveText('Products');

});

test('Log in with locked out user', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.logIn(usersJson.userLocked.username, usersJson.userLocked.password);  
  await expect(loginPage.error).toHaveText('Epic sadface: Sorry, this user has been locked out.');
});
