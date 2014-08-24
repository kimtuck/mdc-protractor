_ShelfPage = function() {
    var self = this;

    this.shelfList = element(by.id('ShelfOrderChooserContainer'));
    this.newShelfButton = element(by.partialButtonText('New Shelf'));
    this.addTitlesFromCollectionButton=element(by.tagWithText('span','Add Titles From Collection'))

    this.deleteRow = function(row) {
        row.click();
        row.element(by.partialButtonText('Edit')).click();
        browser.waitForAngular();
        element(by.className('span3')).element(by.partialButtonText('Delete')).click();
        Dialog.confirm('Delete')
    }
    this.findRow = function(shelfName, operation, missingFn) {
       var shelfName = this.shelfList.element(by.tagWithText('span',shelfName));
        shelfName.isPresent().then(function(isThere){
            if (isThere) {
                var row = shelfName.element(by.parent()).element(by.parent()).element(by.parent());
                if (operation)
                    operation(row)
            }
            else if (missingFn)
                missingFn(shelfName);
        });
    }

    this.removeShelf = function(shelfName) {
        UserMenu.goToAdministrationMenu();
        NavigationTabs.ShelvesTab.click();
        self.findRow(shelfName, self.deleteRow);
    }

    this.AddTitlesToShelf = function() {
        this.addTitlesFromCollectionButton.click();
        CollectionPage.addTitlesToShelf();
    }


    this.addManualShelf = function(shelfName, properties) {
        //UserMenu.goToAdministrationMenu();
        //NavigationTabs.ShelvesTab.click();
        self.newShelfButton.click();
        Dialog.confirm("Manual");
        ShelfBuilderPage.CreateManualShelf(shelfName,properties);
        this.AddTitlesToShelf();
    }

    this.addAutomaticShelf = function(shelfName, properties) {
        //UserMenu.goToAdministrationMenu();
        //NavigationTabs.ShelvesTab.click();
        self.newShelfButton.click();
        Dialog.confirm("Automated");
        ShelfBuilderPage.CreateAutomaticShelf(shelfName,properties);
    }

    this.expectShelf = function(shelfName) {
        self.findRow(shelfName,
            null,
            function(shelfName) { it.fail("Expected shelf " + shelfName + "to exist")})
    }};

ShelfPage = new _ShelfPage();
