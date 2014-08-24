_CollectionPage = function() {
    this.PageName="CollectionPage",
    this.get = function() {
        browser.get(browser.baseUrl + 'collection');
    };

    this.criteriaBuilder = new mmm.criteriaBuilder(this,true);
    this.criteriaDisplay = new mmm.criteriaDisplay();

    this.addBooksToShelfButton = element(by.partialButtonText("Add Books to"));

    this.addTitlesToShelf = function(){
        ShopPage.fillInFields.titleSearch.configure();
        browser.waitForAngular();
        ShopPage.criteriaBuilder.closeButton.click();
        this.criteriaDisplay.UpdateResultsButton.click();
        SortTable.checkAllCheckbox.click();
        this.addBooksToShelfButton.click();
    }
};
CollectionPage = new _CollectionPage();