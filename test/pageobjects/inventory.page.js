import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class InventoryPage extends Page {
    /**
     * define selectors using getter methods
     */

    get logoutLink () {
        return $('#logout_sidebar_link');
    }

    get btnAddToCart () {
        return $('#add-to-cart-sauce-labs-backpack');
    }

    get btnRemoveFromCart () {
        return $('#remove-sauce-labs-backpack');
    }

    get products () {
        return $('#inventory_container')
    }

    get btnAddToCartBolt () {
        return $('#add-to-cart-sauce-labs-bolt-t-shirt')
    }

    get dropDownSort () {
        return $(".product_sort_container")
    }

    get resetAppStateLink () {
        return $("#reset_sidebar_link")
    }

    get btnMenu () {
        return $("#react-burger-menu-btn")
    }

    get btnViewCart () {
        return $("#shopping_cart_container")
    }

}

export default new InventoryPage();