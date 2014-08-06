_NavigationTabs = function() {
    this.NavBar=element(by.className('nav-tabs'));

    this.HomeTab=this.NavBar.element(by.css('li:nth-child(5) a'));
    this.HomeTab.url='landing';
    this.HomeTab.label='Home';

    this.ShopTab=this.NavBar.element(by.css('li:nth-child(7) a'));
    this.ShopTab.url='shop';
    this.ShopTab.label='Shop';

    this.ShopByEisbnTab=this.NavBar.element(by.css('li:nth-child(8) a'));
    this.ShopByEisbnTab.url='shop-by-eisbn';
    this.ShopByEisbnTab.label='Shop by eISBN';

    this.CartsTab=this.NavBar.element(by.css('li:nth-child(9) a'));
    this.CartsTab.url='shop-cart';
    this.CartsTab.label='Carts';

    this.ShelvesTab=this.NavBar.element(by.css('li:nth-child(11) a'));
    this.ShelvesTab.url='shelves';
    this.ShelvesTab.label='Shelves';

    this.CollectionTab=this.NavBar.element(by.css('li:nth-child(13) a'));
    this.CollectionTab.url='collection';
    this.CollectionTab.label='Collection';

    this.PurchaseOrdersTab=this.NavBar.element(by.css('li:nth-child(14) a'));
    this.PurchaseOrdersTab.url='purchase-orders';
    this.PurchaseOrdersTab.label='POs';

    this.AutoBuyTab=this.NavBar.element(by.css('li:nth-child(16) a'));
    this.AutoBuyTab.url='autobuy';
    this.AutoBuyTab.label='Auto Buy';

    this.FeaturedListAddBooksTab=this.NavBar.element(by.css('li:nth-child(19) a'));
    this.FeaturedListAddBooksTab.url='featured-list-management';
    this.FeaturedListAddBooksTab.label='Featured List Add Books';

    this.FeaturedListLandingPageListOrderTab=this.NavBar.element(by.css('li:nth-child(20) a'));
    this.FeaturedListLandingPageListOrderTab.url='featured-list-order';
    this.FeaturedListLandingPageListOrderTab.label='Landing Page List Order';

    this.FeaturedListBookOrderTab=this.NavBar.element(by.css('li:nth-child(21) a'));
    this.FeaturedListBookOrderTab.url='featured-list-book-order';
    this.FeaturedListBookOrderTab.label='List\'s Book Order';

    this.FeaturedListGroupsTab=this.NavBar.element(by.css('li:nth-child(22) a'));
    this.FeaturedListGroupsTab.url='featured-list-group-management';
    this.FeaturedListGroupsTab.label='Featured List Groups';

    this.LibraryTab=this.NavBar.element(by.css('li:nth-child(23) a'));
    this.LibraryTab.url='library-settings';
    this.LibraryTab.label='Library';

    // valid only on Carts page
    this.BuyCartTab=element(by.partialLinkText("Buy Cart"));
    this.BuyCartTab.clearCartButton=element(by.partialButtonText("Clear Cart"))
    this.ShopCartTab=element(by.partialLinkText("Shop Cart"));
    this.ShopCartTab.clearCartButton=element(by.partialButtonText("Clear Cart"))
}


NavigationTabs = new _NavigationTabs();
