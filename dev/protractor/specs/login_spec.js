describe('User Can Login', function() {
    beforeEach(function() {
        var username = browser.element(by.name('username'));
        var password = browser.element(by.name('password'));
        var button = browser.element(by.buttonText('Login'));

        var user = {login: 'uat10mn@yahoo.com', pass: '3msuper#' };
        browser.get('http://cat.3m.com');
        username.sendKeys(user.login);
        password.sendKeys(user.pass);
        button.click();
    });
    it('Takes you to landing page after login',function() {
        expect(browser.getCurrentUrl()).toBe('https://cat.3m.com/layout/index.html#/landing');
    })
});
