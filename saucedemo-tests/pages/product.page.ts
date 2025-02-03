import { expect, type Locator, type Page } from '@playwright/test';

export class ProductPage {
    readonly page: Page;

    readonly item: Locator;
    

    constructor(page: Page){
        this.page = page;
        this.item = page.locator('.inventory_item');

    }

    async addItemToCart(itemName: string){
        const itemList = this.item;
        const item = await itemList.filter({ hasText: itemName });
        await item.locator('button').click();
    }
}