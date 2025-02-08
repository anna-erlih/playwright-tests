import { expect, type Locator, type Page } from '@playwright/test';

export class ProductPage {
    readonly page: Page;

    readonly item: Locator;
    readonly title: Locator;
    readonly inventoryList: Locator;
    readonly shoppingCartBadge: Locator;
    

    constructor(page: Page){
        this.page = page;
        this.item = page.getByTestId('inventory-item');
        this.title = page.getByTestId('title');
        this.inventoryList = page.getByTestId('inventory-list');
        this.shoppingCartBadge = page.getByTestId('shopping-cart-badge');
    }

    async addItemToCart(itemName: string){
        const item = this.item.filter({ hasText: itemName });
        await item.getByText('Add to cart').click();
    }
}