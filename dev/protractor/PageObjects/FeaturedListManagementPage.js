_FeaturedListManagementPage = function() {
    var self = this;


    this.openListButton=element(by.className('btn-add-cart-selector')).element(by.className('dropdown-toggle'));
    this.list=element(by.repeater('featuredList in FeaturedListsService.featuredLists'));
    this.addNewListButton=element(by.partialButtonText('New Featured List'));
    this.featuredListName=element(by.model("featuredList.FeaturedListName"));
    this.description=element(by.model("featuredList.FeaturedListDscr"));
    this.addSelectedToButton=element(by.partialButtonText('Add Selected to'));
    this.trayInfo=element(by.tagWithText('span','total titles'))
    this.addAllBooksButton=element(by.className('book-grid-buttons')).element(by.className('btn-warning'));

    this.numberOfBooksInList = function() {
        expect(this.trayInfo.isPresent()).toBeTruthy()
        var deferred = protractor.promise.defer();
        this.trayInfo.getText().then(function(value) {
            deferred.fulfill(parseInt(firstWord(value)));
        })
        return(deferred.promise)
    }

    this.deleteRow = function(row, nameElement) {
        row.click();
        self.openListButton.click();
        expect(row.element(by.className('icon-remove')).isPresent()).toBeTruthy();
        row.element(by.className('icon-remove')).click();
        Dialog.confirm('Delete')
    }

    this.findRow = function(listName, operation, missingFn) {
        self.openListButton.click();
        browser.sleep(2*1000);

        var nameElement = this.list.element(by.tagWithText('a',listName));
        nameElement.isPresent().then(function(isThere){
            if (isThere) {
                var row = nameElement.element(by.parent()).element(by.parent());
                if (operation)
                    operation(row,nameElement)
            }
            else{
                self.openListButton.click();
                if (missingFn)
                    missingFn(listName);
            }
        });
    }

    this.removeFeaturedList = function(listName) {
        NavigationTabs.FeaturedListAddBooksTab.click();
        (new mmm.criteriaBuilder()).closeButton.click();
        self.findRow(listName, self.deleteRow);
    }

    this.addFeaturedListFields = function(properties) {
        self.featuredListName.sendKeys(properties.name);
        self.description.sendKeys(properties.description);
    }

    this.addFeaturedList = function(shelfName, properties) {
        NavigationTabs.FeaturedListGroupsTab.click();
        NavigationTabs.FeaturedListAddBooksTab.click();
        ShopPage.criteriaBuilder.closeButton.click();
        self.openListButton.click();
        browser.sleep(2*1000);
        self.addNewListButton.click();
        Dialog.confirm('Save',self.addFeaturedListFields,properties)
    }

    this.expectListToContain = function(listName) {
        self.findRow(listName,
            null,
            function(listName) { throw("Expected list " + listName + "to exist")})
    };

    this.chooseFeaturedList = function(listName) {
        self.findRow(listName, function(row,nameElement) {
            nameElement.click();
        });
    }

    this.selectAndAddBooks = function() {
        SortTable.checkAll();
        this.addSelectedToButton.click();
    }

    this.addBooksToFeaturedList = function(listName, criteriaBuilderFunction) {
        NavigationTabs.FeaturedListGroupsTab.click();
        NavigationTabs.FeaturedListAddBooksTab.click();
        criteriaBuilderFunction();
        ShopPage.criteriaBuilder.closeButton.click();
        ShopPage.criteriaDisplay.UpdateResultsButton.click();

        self.chooseFeaturedList(listName);
        browser.sleep(5*1000);
        self.selectAndAddBooks();
    }

    this.addAllBooks = function() {
        self.addAllBooksButton.click();
        Dialog.confirm("Add")
    }

    this.addAllBooksToFeaturedList = function(listName, criteriaBuilderFunction) {
        NavigationTabs.FeaturedListGroupsTab.click();
        NavigationTabs.FeaturedListAddBooksTab.click();
        criteriaBuilderFunction();
        ShopPage.criteriaBuilder.closeButton.click();
        ShopPage.criteriaDisplay.UpdateResultsButton.click();
        self.chooseFeaturedList(listName);
        self.addAllBooks();
    }
    this.expectNumberOfBooksInListToBe = function(expected) {
        self.numberOfBooksInList().then(function(howMany) {
            expect(howMany).toEqual(expected)
        })
    }
};

FeaturedListManagementPage = new _FeaturedListManagementPage();
