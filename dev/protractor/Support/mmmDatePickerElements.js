/* global */
mmmDatePickerElements = function(model) {

    var datePicker = element(by.model(model));
    var tooltip = datePicker.element(by.css(".tooltip-inner"));
    var input = datePicker.element(by.tagName("input"));

    var hasHiddenTooltip = function() {
        expect(tooltip.getText()).toBe('');
        return true;
    };
    var hasTooltipWithText = function(text) {
        expect(tooltip.getText()).toBe(text);
        return true;
    };

    var typeDate = function(string) {
        input.click();
        input.sendKeys(protractor.Key.CONTROL,'a');
        input.sendKeys(string);
        input.sendKeys(protractor.Key.ENTER);
    }
    return {
        model: model,
        datePicker: datePicker,
        tooltip: tooltip,
        input: input,
        hasHiddenTooltip: hasHiddenTooltip,
        hasTooltipWithText: hasTooltipWithText,
        typeDate: typeDate
    };
}
