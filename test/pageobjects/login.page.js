import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('#user-name');
    }

    get loginRedirectURL () {
        return 'https://www.saucedemo.com/inventory.html'
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('input[type="submit"]');
    }

    get headerError () {
        return $('h3[data-test="error"]');
    }

    get btnLogin () {
        return $('#login-button');
    }

    get loginCredentials () {
        return $('#login_credentials');
    }


    get checkoutStepOneURL () {
        return 'https://www.saucedemo.com/checkout-step-one.html'
    }


    

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('');
    }
}

export default new LoginPage();