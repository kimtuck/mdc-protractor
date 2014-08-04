describe('User Can Login', function() {
    it('User can login',function() {
        var user = {login: 'uat10mn@yahoo.com', pass: '3msuper#' };
        browser.get('http://cat.3m.com');
        browser.element(by.name('username')).sendKeys(user.login);
        browser.element(by.name('password')).sendKeys(user.npmpass);
        browser.element(by.buttonText('Login')).click();
        expect(browser.getCurrentUrl()).toBe('https://cat.3m.com/layout/index.html#/');
    })
});
