import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import InventoryPage from '../pageobjects/inventory.page.js'
import loginPage from '../pageobjects/login.page.js'
import inventoryPage from '../pageobjects/inventory.page.js'

describe('My login application', () => {
    it('Checking out process', async () => {
        await LoginPage.open()
        await LoginPage.login('standard_user', 'secret_sauce')

        await expect(InventoryPage.logoutLink).toBeExisting()
        await expect(browser).toHaveUrl(loginPage.loginRedirectURL)
        await expect(InventoryPage.btnAddToCart).toBeExisting()
        await InventoryPage.btnAddToCart.click()
        await InventoryPage.btnViewCart.click()
        await expect(InventoryPage.btnCheckout).toBeExisting()
        await InventoryPage.btnCheckout.click()
        await expect(browser).toHaveUrl(loginPage.checkoutStepOneURL)
        await InventoryPage.checkout('karen', 'heap', '84005')

    })
})

