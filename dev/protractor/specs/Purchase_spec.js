ddescribe('Purchase End-To-End test', function() {
    beforeEach(function() {
        Login();
    });
    it('PurchaseSomeBooks', function() {

        var referenceNumber='Ref' + (new Date()).getTime();
        CartsPage.clearShopAndBuyCart('MyCart');

        ShopPage.searchForSomeItems();
        SortTable.checkAllCheckbox.click();
        ShopPage.addSelectedToCartButton.click();

        CartsPage.addAllTitlesToBuyCart();
        CartsPage.purchaseBuyCart(referenceNumber);
        PurchaseOrderPage.waitForCompletedPurchaseOrder(referenceNumber);
    });
});
