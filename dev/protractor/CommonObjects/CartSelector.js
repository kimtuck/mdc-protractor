_CartSelector = function() {
    var self = this;
    this.container = element(by.css("div[ng-controller=CartSelectorController]"));
    this.cartSelectorDropdown = this.container.element(by.partialButtonText("Cart:"));
    this.cartList = this.container.element(by.className("dropdown-menu"));
    this.userDiv = function(userId) { return this.cartList.element(by.css('div[userid="' + userId + '"]')) };
    this.cart = function(userId, cartName) { return self.userDiv(userId).element(by.css('a[title="' + cartName +'"]')) }

    this.selectCart = function(userId, cartName) {
        expect(self.cartSelectorDropdown.isPresent()).toBeTruthy();
        self.cartSelectorDropdown.click();
        expect(self.cartList.isPresent()).toBeTruthy();
        expect(self.userDiv(userId).isPresent()).toBeTruthy();
        expect(self.cart(userId,cartName).isPresent()).toBeTruthy();
        self.cart(userId,cartName).click();
    }
}
CartSelector = new _CartSelector();