mmm={}

mmm.reportsUrlPrefix='http://dclwebdev01/LibraryData/'


mmm.datePickerWithDropdown = function(name, page, dropdownSelector,fromSelector,thruSelector,SelectCustomOptionIndex) {
    return {
        page: page,
        name: name,
        dropdown: element(by.model(dropdownSelector)),
        fromDate: mmmDatePickerElements(fromSelector),
        thruDate: mmmDatePickerElements(thruSelector),

        SelectCustomDateRange: function() {
            SelectDropdownOption(this.dropdown,SelectCustomOptionIndex);
        },
        SelectOption: function(index) {
            SelectDropdownOption(this.dropdown,index);
        },
        SelectOption0: function() {
            SelectDropdownOption(this.dropdown,0);
        }
    }
};



// Criteria Builder
        mmm.criteriaBuilder = function(page, hasEbookPurchasedDate) {
            this.container = element(by.className('query-filter-ui'));
            this.closeButton = this.container.element(by.partialButtonText('x'));
            this.openButton = element(by.className('query-filter-expander'));
            this.title = this.container.element(by.model('title'))
            this.titleAddButton = this.title.element(by.parent()).element(by.tagName('button'));

            this.author = this.container.element(by.model('author'))
            this.authorAddButton = this.author.element(by.parent()).element(by.tagName('button'));

            this.eisbn = this.container.element(by.model('eisbn'))
            this.eisbnAddButton = this.eisbn.element(by.parent()).element(by.tagName('button'));

            this.category = this.container.element(by.tagWithText('div','Category'));
            this.publisher = this.container.element(by.tagWithText('div','Category'));
            this.provider = this.container.element(by.tagWithText('div','Provider'));

            this.publishedWithin = mmm.datePickerWithDropdown("Published Within", this, "FilterCriteriaService.criteria.daysAgo", "FilterCriteriaService.criteria.pubDateFrom", "FilterCriteriaService.criteria.pubDateTo", 7);
            this.dateAddedToCatalog = mmm.datePickerWithDropdown("DateAddedToCatalog", this, "FilterCriteriaService.criteria.addedDaysAgo", "FilterCriteriaService.criteria.addDateFrom", "FilterCriteriaService.criteria.addDateTo", 6);
            this.ebookPurchasedDate = mmm.datePickerWithDropdown("EbookPurchasedDate", this, "FilterCriteriaService.criteria.purchasedDaysAgo", "FilterCriteriaService.criteria.purchaseDateFrom", "FilterCriteriaService.criteria.purchaseDateTo", 1);

            this.minPrice = this.container.element(by.model("FilterCriteriaService.criteria.minPrice"));
            this.maxPrice = this.container.element(by.model("FilterCriteriaService.criteria.maxPrice"));

            this.poReference = this.container.element(by.model("POReference"));
            this.poReferenceAddButton = this.poReference.element(by.parent()).element(by.tagName('button'));

            this.language = this.container.element(by.model("FilterCriteriaService.critieria.language"));  // NOTE the source has a typo in criteria

            this.mediaSelector = this.container.element(by.className('media-type-selector'));
            this.mediaSelector.openButton = this.mediaSelector.element(by.tagName('select'));
            this.mediaSelector.audioBooks = this.mediaSelector.element(by.id('Audio books')) ;
            this.mediaSelector.mp3 = this.mediaSelector.element(by.id('Audio books-MP3')) ;
            this.mediaSelector.electronicBooks = this.mediaSelector.element(by.id('Electronic books'));
            this.mediaSelector.pdf = this.mediaSelector.element(by.id('Electronic books-PDF'))  ;
            this.mediaSelector.epub = this.mediaSelector.element(by.id('Electronic books-EPUB'));

            this.holdRatio = this.container.element(by.model('holdratio'));
            this.holdRatioAddButton = this.holdRatio.element(by.parent()).element(by.tagName('button'));

            this.notInMyLibrary = this.container.element(by.model("FilterCriteriaService.criteria.notincollection"));

        }

        mmm.criteriaDisplay = function() {
            this.criteriaDisplay=element(by.className("criteria-display-container"));
            this.ClearAllButton = this.criteriaDisplay.element(by.buttonText("Clear All"));
            this.UpdateResultsButton = this.criteriaDisplay.element(by.partialButtonText("Update Results"));
            this.SaveButton = this.criteriaDisplay.element(by.buttonWithText("Save"));

        }

        mmm.ClearButton = function() {
            return element(by.buttonWithText("Clear All"));
        }

_PaginationControl = function() {
    this.container = element(by.className("pagination-control"));
    this.totalRecords = this.container.element(by.binding('tableProperties.totalRecords'))
}
PaginationControl = new _PaginationControl();



// squirrel.pl/blog/2014/01/15/direct-server-http-calls-in-protractor/
var request = require('request');
var req;
var jar;
var post;
beforeEach(function() {
  jar = request.jar();
  req = request.defaults({jar : jar });
});

mmm.post = function(url, params) {
    var thisReq=req;
    var defer = protractor.promise.defer();

    var myUrl =browser.baseUrl.replace('#/','') + url;
    if (url.indexOf('http') >= 0)
        myUrl=url;
    //console.log("posting to" , myUrl);
    req.post(myUrl, params, function(error, message) {
        //console.log("Done post to", url);
        //console.log(message);
        if (error || message.statusCode >= 400) {
            defer.reject({
                error : error,
                message : message
            });
        } else {
            defer.fulfill(message);
        }
    });
    return defer.promise;
}

mmm.TriggerPreSaleProcessingUrl = 'http://dclwebdev01:20943/PrePub/MakePurchases2';
mmm.ChangeItemStateUrl='arcus/api/PrePub';
