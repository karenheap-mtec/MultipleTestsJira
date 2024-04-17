import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import InventoryPage from '../pageobjects/inventory.page.js'
import loginPage from '../pageobjects/login.page.js'
import inventoryPage from '../pageobjects/inventory.page.js'

describe('Logout Process', () => {
    it('Positive - Logout process', async () => {
        await LoginPage.open()
        await LoginPage.login('standard_user', 'secret_sauce')

        await expect(InventoryPage.logoutLink).toBeExisting()
        await expect(browser).toHaveUrl(loginPage.loginRedirectURL)
        await InventoryPage.btnMenu.click()
        await InventoryPage.logoutLink.click()
    })

    it('Negative - Logout process', async () => {
        await LoginPage.open()
        await LoginPage.login('performance_glitch_user', 'secret_sauce')

        await expect(loginPage.loginCredentials).not.toBeExisting()
    })
})

