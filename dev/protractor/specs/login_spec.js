describe('User Can Login', function() {
    beforeEach(function() {
        var user = {login: 'uat10mn@yahoo.com', pass: '3msuper#' };
        browser.get('http://cat.3m.com');
        LoginPage.username.sendKeys(user.login);
        LoginPage.password.sendKeys(user.pass);
        LoginPage.button.click();
    });
    it('Takes you to landing page after login',function() {
        expect(browser.getCurrentUrl()).toBe('https://cat.3m.com/layout/index.html#/landing');
    })
});
