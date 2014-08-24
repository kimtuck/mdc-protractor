_Dialog = function() {
    var self = this;
    this.waitForDialog = function() {
        browser.waitForAngular();
        browser.sleep(3*1000);
        browser.waitForAngular();
    }


    this.confirm = function(confirmButtonText,fieldPopulationFunction,fieldPopulationArguments) {
        var ConfirmModal = element(by.model("modal.show"))
        self.waitForDialog();

        ConfirmModal.isPresent().then(function(isThere){
            if (!isThere) {
                expect(1).toBe(2);
                //console.log("modal is there: (" + confirmButtonText + ") " + isThere)
                //captureHtml(confirmButtonText);
                //captureScreenshot(confirmButtonText);
            }
        });

        if (fieldPopulationFunction != null) {
            //console.log('run fieldPopulationMethod')
            fieldPopulationFunction(fieldPopulationArguments);
        }

        var ConfirmButton = ConfirmModal.element(by.partialButtonText(confirmButtonText));
        ConfirmButton.isPresent().then(function(isThere){
            if (!isThere) {
                //console.log("confirm button is there: (" + confirmButtonText + ") " + isThere)
                captureHtml(confirmButtonText);
                captureScreenshot(confirmButtonText);
            }
        });
        ConfirmButton.click();
        self.waitForDialog();
    }
}
Dialog=new _Dialog();
