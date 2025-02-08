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
  await expect(loginPage.loggedInPageTitle).toHaveText('Products');

});


// test('Add to cart', async ({ page }) => {
//   const productPage = new ProductPage(page);

//   await productPage.addItemToCart('Sauce Labs Bolt T-Shirt')
  
// });
