_ShelfBuilderPage = function() {
    var self = this;
    this.ShelfName=element(by.model("shelfName"))
    this.saveButton=element(by.className('span2')).element(by.partialButtonText('Save'))
    this.addTitlesFromCollectionButton=element(by.tagWithText('span','Add Titles From Collection'))

    this.CreateManualShelf = function(shelfName,properties) {
        this.ShelfName.sendKeys(shelfName);
        this.saveButton.click();
    }
    this.CreateAutomaticShelf = function(shelfName,properties) {
        this.ShelfName.sendKeys(shelfName);
        this.saveButton.click();
    }

    this.AddTitlesToShelf = function() {
        this.addTitlesFromCollectionButton.click();
        Dialog.confirm('Leave')
        CollectionPage.addTitlesToShelf();
    }
}

ShelfBuilderPage = new _ShelfBuilderPage();