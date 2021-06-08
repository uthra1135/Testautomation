const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {

     /**
     * overwrite specifc options to adapt it to page object
     */
      open () {
        return super.open();
    }
    /**
     * define selectors using getter methods
     */
    get inputUsername () { 
        return $('#email') 
    }
    get inputPassword () { 
        return $('#passwd')
     }

   get btnSubmit () { 
       return $('button[type="submit"]')
     }

   get womenBtn() {
    return $("[title = Women]");
  }
    get tshirtBtn(){
        return $('#block_top_menu ul li:nth-child(1) ul li:nth-child(1) ul li:nth-child(1)');
    }

    get firstItem(){
        return $("img[title = Faded Short Sleeve T-shirts]");
    }

    get addToCart(){
        return $("[title = Add to cart]");
    }

    get cartCount(){
        return $('#layer_cart_product_quantity');
    }

    get proceedToCheckout(){
        return $("[title=Proceed to checkout]");
    }

    get shippingAddress(){
        return $("#order_step > li.step_current.third > span");
    }

    get checkBoxAtShippingPage(){
        return $("[type ='submit]");
    }

    get payByBankMethod(){
        return $("[title=Pay by bank wire]");
    }


    get confirmButton(){
        return $ ('#cart_navigation > button > span');
    }

    get confirmationPage(){
        return $ ('.page-heading');
    }
    /**
     * a method  to login using username and password
     */
     async login (username, password) {
        await (await this.inputUsername).setValue(username);
        await (await this.inputPassword).setValue(password);
        await (await this.btnSubmit).click();
    }
    /**
     * method to tap on Product listing page -"Women"
     * 
     */

    async tapOnPLP(){
        await (await this.womenBtn).click();
    }

    /**
     * method to tap on subcategory-"t-shirt"
     */

     async tapOnSubCategoryPLP(){
         await(await this.tshirtBtn).isDisplayed();
        // console.log(this.tshirtBtn.isClickable);
        await (await this.tshirtBtn).click();
    }

    /**
     * method to scroll and mouse over  on the first item from the list 
     */

    async tapOnFirstItem(){
         await (await this.firstItem).scrollIntoView();
        await (await this.firstItem).isDisplayed();
        await (await this.firstItem).moveTo();
    }
    /**
     * 
     * method to tap on add to cart on the item
     */
   async tapOnAddToCart(){
    await (await this.addToCart).click();
   }
/**
 * 
 * Method to validate the cart count 
 * 
 */
async assertCartCount(){
    await(await this.cartCount).isDisplayed();
    
  
   
}

async clickOnCheckOut(){
    await (await this.proceedToCheckout).scrollIntoView();
    await (await this.proceedToCheckout).isDisplayed();
    await (await this.proceedToCheckout).click();
   }
async assertAddressPage(){
    await (await this.shippingAddress).isDisplayed();
}

async enableCheckBox(){
    await (await this.checkBoxAtShippingPage).scrollIntoView();
    await (await this.checkBoxAtShippingPage).click();
    
}

async clickOnPaymentMethod(){
    await (await this.payByBankMethod).scrollIntoView();
    await (await this.payByBankMethod).click();
}

async clickOnConfirmButton(){
    await (await this.confirmButton).click();
}

async assertOrderPlaced(){
    await (await this.confirmationPage).isDisplayed();
}
   
}

module.exports = new LoginPage();
