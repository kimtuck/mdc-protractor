beforeEach(function() {
    browser.driver.get('about:blank');
    browser.driver.manage().window().setSize(100,100);
    browser.driver.manage().window().setPosition(2000,100)
    browser.driver.manage().window().maximize();
});
afterEach(function() {
    browser.sleep(15*1000);
})
