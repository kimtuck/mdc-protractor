// Navigation, etc
_UserMenu = function() {
    var self=this;
    this.menu= element(by.className('user-menu'));
    this.dropdown = this.menu.element(by.tagName('a'));
    this.adminButton = this.menu.element(by.css('li:nth-child(1) a'))
    this.exitAdminButton = this.menu.element(by.css('li:nth-child(2) a'))
    this.reportButton = this.menu.element(by.css('li:nth-child(6) a'))
    this.logoutButton = this.menu.element(by.css('li:nth-child(7) a'))

    this.goToAdministrationMenu = function() {
        self.dropdown.click();
        self.adminButton.click();
    }
    this.exitAdministrationMenu = function() {
        self.dropdown.click();
        self.exitAdminButton.click();
    }

}
UserMenu = new _UserMenu();
