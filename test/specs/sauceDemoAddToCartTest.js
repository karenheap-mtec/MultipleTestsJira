import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import InventoryPage from '../pageobjects/inventory.page.js'
import loginPage from '../pageobjects/login.page.js'
import inventoryPage from '../pageobjects/inventory.page.js'

describe('Add To Cart', () => {
    it('Positive Test - Add to Cart standard_user', async () => {
        await LoginPage.open()
        await LoginPage.login('standard_user', 'secret_sauce')

        await expect(InventoryPage.logoutLink).toBeExisting()
        await expect(browser).toHaveUrl(loginPage.loginRedirectURL)
        await expect(InventoryPage.btnAddToCart).toBeExisting()
        await InventoryPage.btnAddToCart.click()
    })

    it('Negative Test - Add to Cart problem_user', async () => {
        await LoginPage.open()
        await LoginPage.login('problem_user', 'secret_sauce')

        await expect(InventoryPage.logoutLink).toBeExisting()
        await expect(browser).toHaveUrl(loginPage.loginRedirectURL)
        await expect(InventoryPage.btnAddToCartBolt).toBeExisting()
        await InventoryPage.btnAddToCartBolt.click()
        await expect(InventoryPage.btnAddToCartBolt).toBeExisting()
    })
})

