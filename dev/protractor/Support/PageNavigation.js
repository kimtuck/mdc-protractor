NavigateToShopPage = function() {
    element(by.xpath("//a[contains(.,'Shop')]")).click();
    expect(browser.getCurrentUrl()).toBe(browser.baseUrl +'shop');
}



