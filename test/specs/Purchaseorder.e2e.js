const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

/**
 * Load the http://automationpractice.com/index.php
 * Navigate from homepage women category to tshirts 
 * Tap on first element and click on add to cart 
 * Complete the checkout process and complete the order
 * 
 */

describe('Purchase and complete the order', () => {
    it('Navigate to women category and then to sub category', async () => {
       await LoginPage.open();
       await LoginPage.tapOnPLP();
      await LoginPage.tapOnSubCategoryPLP();
    });

      it('Tap on first item and add to cart ', async () => {
       await LoginPage.tapOnFirstItem();
       await LoginPage.tapOnAddToCart();
       await LoginPage.assertCartCount();

      });
       it('Tap on checkout and complete the order ', async () => { 
       await LoginPage.clickOnCheckOut();
       await LoginPage.clickOnCheckOut();
       await LoginPage.login('zip.tester01@zipapp.com','zip@123');
       await LoginPage.assertAddressPage();
       await LoginPage.clickOnCheckOut();
       await LoginPage.enableCheckBox();
       await LoginPage.clickOnCheckOut();
       await LoginPage.clickOnPaymentMethod();
       await LoginPage.clickOnConfirmButton();
       await LoginPage.assertOrderPlaced();
    });
});


