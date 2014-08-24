_SortTable = function() {
    var self=this;
    this.trim = function(str){ return (str || "").replace( /^\s+|\s+$/g, "" ); }

    this.checkAllCheckbox=element(by.className("list-checked"));

    this.allRows = function() {
        return element.all(by.repeater('row in tableProperties.tableRows'))
    }
    this.row = function(row) {
        return element(by.repeater('row in tableProperties.tableRows').row(row))
    }

    this.checkAll = function() {
        self.checkAllCheckbox.isPresent().then(function(isp) {
            if (!isp)
                return;
            self.checkAllCheckbox.isDisplayed().then(function(isp) {
                if (!isp)
                    return;

                self.checkAllCheckbox.click();
            });
        });
    }

    this.GetFirstBookColumnContents = function(field,column) {
        var table = element(by.className('book-grid'));
        var locator= 'tbody tr td:nth-child(' + column + ') span';
        var e = table.element(by.css(locator));
        e.getInnerHtml().then(function(x) {
            self[field] = SortTable.trim(x);
        });
    }

    this.GetFirstBookEisbn = function(field,column) {
        self.GetFirstBookColumnContents(field,column);
    }

    this.SelectFirstBook = function() {
        var table = element(by.className('book-grid'));
        var checkbox = table.element(by.css('tbody tr td:nth-child(1) input'));
        checkbox.click();
    }

}
SortTable = new _SortTable