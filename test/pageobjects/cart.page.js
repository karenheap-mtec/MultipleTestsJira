import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CartPage extends Page {
    /**
     * define selectors using getter methods
     */

    get btnSubmit () {
        return $('input[type="submit"]');
    }

    get headerError () {
        return $('h3[data-test="error"]');
    }

    get checkoutStepOneURL () {
        return 'https://www.saucedemo.com/checkout-step-one.html'
    }

    get btnCheckout () {
        return $("#checkout")
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

export default new CartPage();