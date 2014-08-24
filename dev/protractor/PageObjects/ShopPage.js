
_ShopPage = function() {
    this.PageName="ShopPage",
    this.get = function() {
        browser.get(browser.baseUrl +'shop');
    };

    this.fillInFields = {
        titleSearch: {
            Name: 'Title',
            configure: function() {
                ShopPage.criteriaBuilder.title.sendKeys('King');
                ShopPage.criteriaBuilder.titleAddButton.click();
            }
        },

        authorSearch: {
            Name: 'Author',
            configure: function() {
                ShopPage.criteriaBuilder.author.sendKeys('Gaiman');
                ShopPage.criteriaBuilder.authorAddButton.click();
            }
        },

        eisbnSearch: {
            Name: 'EISBN',
            configure: function(eisbn) {
                ShopPage.criteriaBuilder.eisbn.sendKeys(eisbn || '9781101567074');
                ShopPage.criteriaBuilder.eisbnAddButton.click();
            }
        },

        publishedWithin_30Days: {
            Name: 'PublishedWithin_30Days',
            configure: function() {
                ShopPage.criteriaBuilder.publishedWithin.dropdown.click();
                ShopPage.criteriaBuilder.publishedWithin.SelectOption(2);
            }
        },

        PublishedWithin_excludePublishedItems: {
            Name: 'PublishedWithin_excludePublishedItems',
            configure: function() {
                ShopPage.criteriaBuilder.publishedWithin.dropdown.click();
                ShopPage.criteriaBuilder.publishedWithin.SelectOption(1);
            }
        },

        publishedWithin_DateRange: {
            Name: 'PublishedWithin_DateRange',
            configure: function() {
                var field = ShopPage.criteriaBuilder.publishedWithin;
                field.SelectCustomDateRange();
                field.fromDate.typeDate(DateHelper.BeforeToday(100));
                field.thruDate.typeDate(DateHelper.BeforeToday(1));
            }
        },

        holdRatioSearch: {
            Name: 'holdRatio',
            configure: function() {
                ShopPage.criteriaBuilder.holdRatio.sendKeys('2');
                ShopPage.criteriaBuilder.holdRatioAddButton.click();
            }
        },

        mediaTypeSearch_AudioBooks: {
            Name: 'mediaTypeAudioBooks',
            configure: function() {
                ShopPage.criteriaBuilder.mediaSelector.openButton.click();
                ShopPage.criteriaBuilder.mediaSelector.audioBooks.click();
            }
        },
        mediaTypeSearch_MP3: {
            Name: 'mediaTypeMP3',
            configure: function() {
                ShopPage.criteriaBuilder.mediaSelector.openButton.click();
                ShopPage.criteriaBuilder.mediaSelector.mp3.click();
            }
        },

        mediaTypeSearch_ebooks: {
            Name: 'mediaTypeebooks',
            configure: function() {
                ShopPage.criteriaBuilder.mediaSelector.openButton.click();
                ShopPage.criteriaBuilder.mediaSelector.electronicBooks.click();
            }
        },

        mediaTypeSearch_pdf: {
            Name: 'mediaTypepdf',
            configure: function() {
                ShopPage.criteriaBuilder.mediaSelector.openButton.click();
                ShopPage.criteriaBuilder.mediaSelector.pdf.click();
            }
        },

        mediaTypeSearch_epub: {
            Name: 'mediaTypeEPUB',
            configure: function() {
                ShopPage.criteriaBuilder.mediaSelector.openButton.click();
                ShopPage.criteriaBuilder.mediaSelector.epub.click();
            }
        }
    }



    this.addSelectedToCartButton = element(by.partialButtonText("Add Selected to"))

    this.criteriaBuilder = new mmm.criteriaBuilder(this,false);
    this.criteriaDisplay = new mmm.criteriaDisplay();

    this.searchForSomeItems=function() {
        NavigationTabs.ShopTab.click();
        ShopPage.fillInFields.titleSearch.configure();
        browser.waitForAngular();
        ShopPage.criteriaBuilder.closeButton.click();
        ShopPage.criteriaDisplay.UpdateResultsButton.click();
    }

    this.searchForAudioBooks=function() {
            NavigationTabs.ShopTab.click();
        ShopPage.fillInFields.mediaTypeSearch_AudioBooks.configure();
        browser.waitForAngular();
        ShopPage.criteriaBuilder.closeButton.click();
        ShopPage.criteriaDisplay.UpdateResultsButton.click();
    }
    this.PublicationDateColumnTitle = element(by.tagWithText('span','Publication Date'));
};

ShopPage = new _ShopPage();
console.log("ShopPage")