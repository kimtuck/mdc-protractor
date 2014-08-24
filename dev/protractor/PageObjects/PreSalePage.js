_PreSalePage = function() {
    var self = this;

    this.RemoveAllButton = element(by.partialButtonText('Remove Item(s)'));

    this.ClearAll=function() {
       SortTable.checkAll();
       self.RemoveAllButton.isEnabled().then(function(isEnabled) {
            if (isEnabled){
                self.RemoveAllButton.click().then(function() {
                    self.ClearAll();
                });
            }
        })
    }

    this.ChangePresaleToForSale = function() {
       return mmm.post(mmm.ChangeItemStateUrl, { qs : { eisbn: SortTable.eisbn, state: 'FOR-SALE' }});
    }
    this.ChangeForSaleToPresale = function() {
        return mmm.post(mmm.ChangeItemStateUrl, { qs : { eisbn: SortTable.eisbn, state: 'PRE-SALE' }});
    }

    this.TriggerPreSaleProcessing = function() {
        var x = mmm.post('http://dclwebdev01:20943/PrePub/MakePurchases2', { qs: { libraryId: 1 }} );
    }
}

PreSalePage = new _PreSalePage();