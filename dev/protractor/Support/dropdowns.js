SelectCustomPublishedDateRange = function() {
    var dropdown = element(by.model("FilterCriteriaService.criteria.daysAgo"));
    dropdown.click();
    for (var i = 0; i < 7; i++)
        dropdown.sendKeys(protractor.Key.ARROW_UP);
    for (var i = 0; i < 5; i++)
        dropdown.sendKeys(protractor.Key.ARROW_DOWN);
    dropdown.click();
}

SelectOption0 = function() {
    var dropdown = element(by.model("FilterCriteriaService.criteria.daysAgo"));
    dropdown.click();
    for (var i = 0; i < 7; i++)
        dropdown.sendKeys(protractor.Key.ARROW_UP);
    dropdown.click();
}
SelectOption1 = function() {
    var dropdown = element(by.model("FilterCriteriaService.criteria.daysAgo"));
    dropdown.click();
    for (var i = 0; i < 7; i++)
        dropdown.sendKeys(protractor.Key.ARROW_UP);
    for (var i = 0; i < 1; i++)
        dropdown.sendKeys(protractor.Key.ARROW_DOWN);
    dropdown.click();
}

SelectDropdownOption = function (dropdown,optionNumber) {
    dropdown.click();
    for (var i = 0; i < 7; i++)
        dropdown.sendKeys(protractor.Key.ARROW_UP);
    for (var i = 0; i < optionNumber; i++)
        dropdown.sendKeys(protractor.Key.ARROW_DOWN);
    dropdown.click();
}

