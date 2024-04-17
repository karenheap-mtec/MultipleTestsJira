import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import InventoryPage from '../pageobjects/inventory.page.js'
import loginPage from '../pageobjects/login.page.js'
import inventoryPage from '../pageobjects/inventory.page.js'
import CartPage from '../pageobjects/cart.page.js'
import CheckoutPage from '../pageobjects/checkout.page.js'

describe('Checkout Process', () => {
    it('Positive Test - Checking out process', async () => {
        await LoginPage.open()
        await LoginPage.login('standard_user', 'secret_sauce')

        await expect(InventoryPage.logoutLink).toBeExisting()
        await expect(browser).toHaveUrl(loginPage.loginRedirectURL)
        await expect(InventoryPage.btnAddToCart).toBeExisting()
        await InventoryPage.btnAddToCart.click()
        await InventoryPage.btnViewCart.click()
        await expect(CartPage.btnCheckout).toBeExisting()
        await CartPage.btnCheckout.click()
        await expect(browser).toHaveUrl(CheckoutPage.checkoutStepOneURL)
        await CheckoutPage.checkout('karen', 'heap', '84005')
        await expect(browser).toHaveUrl(CheckoutPage.checkoutStepTwoURL)
        await CheckoutPage.btnFinish.click()
        await expect(browser).toHaveUrl(CheckoutPage.checkoutComplete)
    })

    it('Negative Test - Checking out process', async () => {
        await LoginPage.open()
        await LoginPage.login('error_user', 'secret_sauce')

        await expect(InventoryPage.logoutLink).toBeExisting()
        await expect(browser).toHaveUrl(loginPage.loginRedirectURL)
        await expect(InventoryPage.btnAddToCart).toBeExisting()
        await InventoryPage.btnAddToCart.click()
        await InventoryPage.btnViewCart.click()
        await expect(CartPage.btnCheckout).toBeExisting()
        await CartPage.btnCheckout.click()
        await expect(browser).toHaveUrl(CheckoutPage.checkoutStepOneURL)
        await CheckoutPage.checkout('karen', 'heap', '84005')
        await expect(browser).toHaveUrl(CheckoutPage.checkoutStepTwoURL)
        await CheckoutPage.btnFinish.click()
        await expect(browser).toHaveUrl(CheckoutPage.checkoutStepTwoURL)
    })
})

