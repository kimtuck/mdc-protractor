describe('User Can Login', function() {
    it('Takes you to landing page after login',function() {
        expect(browser.getCurrentUrl()).toBe('https://cat.3m.com/layout/index.html#/landing');
    })
});
