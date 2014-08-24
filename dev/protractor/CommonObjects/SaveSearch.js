_SaveSearch = function() {
    var self = this;
    this.savedSearchesButton=element(by.tagWithText('a',"Saved Searches"))
    this.savedSearchesCloseButton = element(by.css('div[ng-controller="SavedSearchesListModalController"]')).element(by.linkText('Close'));

    this.deleteSavedSearchConfirmModal = element(by.css('div[ng-controller="DeleteSavedSearchModalController"]'));
    this.deleteSavedSearchConfirmModalDeleteButton = this.deleteSavedSearchConfirmModal.element(by.linkText('Delete'));

    this.saveSearchModal=element(by.css('div[ng-controller="SaveSearchModalController"]'));
    this.saveSearchModalName = this.saveSearchModal.element(by.model('newSavedSearchName'));
    this.saveSearchModalSaveButton = this.saveSearchModal.element(by.linkText('Save'));

    this.saveSearch = function(saveSearchName) {
        var c = new mmm.criteriaDisplay();
        expect(c.SaveButton.isPresent()).toBeTruthy();
        c.SaveButton.click();
        Dialog.waitForDialog();
        self.saveSearchModalName.sendKeys(saveSearchName);
        self.saveSearchModalSaveButton.click();
        Dialog.waitForDialog();
    }

    this.findSavedSearchRow = function(searchName, operation) {
        var modal =element(by.model("modal.show"))
        var row = modal.element(by.css('tr[searchname="' + searchName + '"]'));
        row.isPresent().then(function(isThere){
            if (isThere) {
                operation(row)
            }
        });
    }

    this.deleteSavedSearchRow = function(row) {
        row.findElement(by.buttonText("Delete ")).click();
        Dialog.waitForDialog();
        expect(self.deleteSavedSearchConfirmModal.isPresent()).toBeTruthy();
        self.deleteSavedSearchConfirmModalDeleteButton.click();
        Dialog.waitForDialog();
    }

    this.deleteSearch = function(saveSearchName) {
        self.savedSearchesButton.click();
        Dialog.waitForDialog();
        self.findSavedSearchRow(saveSearchName, self.deleteSavedSearchRow);
        self.savedSearchesCloseButton.click();
        Dialog.waitForDialog();
        return;
    }

    this.runSavedSearch = function(row) {
        row.findElement(by.buttonText("Run ")).click();
        Dialog.waitForDialog();
    }

    this.clickSavedSearch = function(saveSearchName) {
        self.savedSearchesButton.click();
        Dialog.waitForDialog();
        self.findSavedSearchRow(saveSearchName, self.runSavedSearch);
    }
}

SaveSearch = new _SaveSearch();