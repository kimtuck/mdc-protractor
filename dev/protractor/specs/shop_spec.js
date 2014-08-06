describe('User Can Shop', function() {
    it('Takes you to shop page when you click shop button',function() {
        NavigationTabs.ShopTab.click();
        expect(browser.getCurrentUrl()).toBe(
            browser.baseUrl
                + '/layout/index.html#/'
                + NavigationTabs.ShopTab.url);
    })
});
