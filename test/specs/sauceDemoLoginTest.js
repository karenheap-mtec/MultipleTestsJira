import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import InventoryPage from '../pageobjects/inventory.page.js'
import loginPage from '../pageobjects/login.page.js'
import inventoryPage from '../pageobjects/inventory.page.js'
import Page from '../pageobjects/page.js'

describe('Login Page', () => {
    it('Positive Test - Logging in with valid credentials', async () => {
        await LoginPage.open()
        await LoginPage.login('standard_user', 'secret_sauce')

        await expect(InventoryPage.logoutLink).toBeExisting()
        await expect(browser).toHaveUrl(loginPage.loginRedirectURL)
        await InventoryPage.btnMenu.click()
        await InventoryPage.resetAppStateLink.click()
    })
    
    it('Negative Test - Logging in with invalid credentials', async () => {
        await LoginPage.open()
        await LoginPage.login('standard_user', 'wrong_password')
    
        await expect(LoginPage.headerError).toBeExisting()
        await expect(browser).toHaveUrl(loginPage.loginPageURL)
    })
})

