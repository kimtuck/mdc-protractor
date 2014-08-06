_LoginPage = function() {
        this.username = browser.element(by.name('username'));
        this.password = browser.element(by.name('password'));
        this.button = browser.element(by.buttonText('Login'));
    };
LoginPage = new _LoginPage();

