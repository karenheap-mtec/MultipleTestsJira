import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CheckoutPage extends Page {
    /**
     * define selectors using getter methods
     */

    get checkoutStepOneURL () {
        return 'https://www.saucedemo.com/checkout-step-one.html'
    }

    get checkoutStepTwoURL () {
        return 'https://www.saucedemo.com/checkout-step-two.html'
    }

    get checkoutComplete () {
        return 'https://www.saucedemo.com/checkout-complete.html'
    }

    get btnContinue () {
        return $("#continue")
    }

    get btnFinish () {
        return $("#finish")
    }

    async checkout (firstName, lastName, zipCode) {
        await this.inputfirstName.setValue(firstName);
        await this.inputlastName.setValue(lastName);
        await this.inputzipCode.setValue(zipCode);
        await this.btnContinue.click();
    }
    
    get inputfirstName () {
        return $("#first-name")
    }

    get inputlastName () {
        return $("#last-name")
    }

    get inputzipCode () {
        return $("#postal-code")
    }

    get btnContinue () {
        return $("#continue")
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('');
    }
}

export default new CheckoutPage();