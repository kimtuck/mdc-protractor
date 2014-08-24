_CartsPage = function() {
    var self = this;

    this.addAllTitlesToBuyCartButton = element(by.partialButtonText("Add All Titles to"));
    this.purchaseButton = element(by.partialButtonText("Purchase"));

    this.addAllTitlesToBuyCart = function() {
        NavigationTabs.CartsTab.click();
        self.addAllTitlesToBuyCartButton.click()
        Dialog.confirm('Yes')
    }

    this.addReferenceNumber = function(referenceNumber) {
        element(by.model('poReference')).sendKeys(referenceNumber);
    }

    this.purchaseBuyCart = function(referenceNumber) {
        NavigationTabs.CartsTab.click();
        NavigationTabs.BuyCartTab.click();
        self.purchaseButton.click()
        Dialog.confirm('Buy',self.addReferenceNumber,referenceNumber)
    }
    this.clearCart=function(cartTab) {
        cartTab.clearCartButton.isEnabled().then(function(isEnabled) {
            if (isEnabled){
                cartTab.clearCartButton.click();
                Dialog.confirm('Clear')
            }
        })

    }
    this.clearBuyCart=function() {
        NavigationTabs.CartsTab.click();
        NavigationTabs.BuyCartTab.click();
        self.clearCart(NavigationTabs.BuyCartTab);
    }

    this.clearShopCart=function(shopCartName) {
        NavigationTabs.CartsTab.click();
        NavigationTabs.ShopCartTab.click();
        CartSelector.selectCart(currentUser.login,shopCartName);
        self.clearCart(NavigationTabs.ShopCartTab)
    }

    this.clearShopAndBuyCart=function(shopCartName) {
        NavigationTabs.CartsTab.click();
        self.clearBuyCart();
        self.clearShopCart(shopCartName);
    }
}

CartsPage = new _CartsPage();
console.log("CartsPage")