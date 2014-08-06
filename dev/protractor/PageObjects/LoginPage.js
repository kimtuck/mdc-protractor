_LoginPage = function() {
    this.username = browser.element(by.name('username'));
    this.password = browser.element(by.name('password'));
    this.button = browser.element(by.buttonText('Login'));

    this.login = function() {
        browser.get('http://cat.3m.com');
        LoginPage.username.sendKeys(user.login);
        LoginPage.password.sendKeys(user.pass);
        LoginPage.button.click();
    };
};
LoginPage = new _LoginPage();

