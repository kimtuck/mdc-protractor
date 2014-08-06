describe('Purchase End-To-End test', function() {
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
