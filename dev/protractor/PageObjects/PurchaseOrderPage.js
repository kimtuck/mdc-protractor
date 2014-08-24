_PurchaseOrderPage = function() {
    var self = this;
    this.updateResultsButton=element(by.partialButtonText("Update Results"))

    this.poNumberColumnTitle=element(by.tagWithText('span','PO #'));
    this.waitForCompletedPurchaseOrder = function(referenceNumber) {

        UserMenu.dropdown.click();
        UserMenu.adminButton.click();
        NavigationTabs.PurchaseOrdersTab.click();

        // Sort by PO Number descending, to ensure that most recent purchase order appears on the search results
        self.updateResultsButton.click();
        self.poNumberColumnTitle.click();

        var isComplete = false;
        var process = function(row) {
            row.element(by.css("tr td:nth-child(2)")).getText().then(function(text) {
                if (text != referenceNumber)
                    return;
                row.element(by.css("tr td:nth-child(7)")).getText().then(function(text) {
                    //console.log('Completed? ' + text)
                    if (text == 'Complete') {
                        console.log('Complete')
                        isComplete=true;
                    }
                });
            });
        }

        processCurrentStatus = function() {
            console.log("processCurrentStatus")
            self.updateResultsButton.click();
            SortTable.allRows().then(function(rows) {
                for (var i = 0; i < rows.length; i++) {
                    process(SortTable.row(i))
                }
            });
            browser.sleep(5*1000)
        }

        browser.wait(
            function() {
                if (isComplete)
                    return true;
                processCurrentStatus();
                }, 5*60*1000).then(
            function() { },
            function() { expect('Purchase did not complete in allotted time').toBe(''); })
        }
}
PurchaseOrderPage = new _PurchaseOrderPage();
