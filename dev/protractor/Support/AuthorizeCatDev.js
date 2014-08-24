var _AuthorizeCatDev = function() {
    var self=this;
    this.authorize = function() {
            var url = 'https://extra3test6.3m.com/enl/?TYPE=33554433&REALMOID=06-47b6768c-fcc0-4079-a59b-f852b174c28a&GUID=&SMAUTHREASON=0&METHOD=GET&SMAGENTNAME=$SM$4ZEjoKEX8QJ6Oh8886JdL%2fJlXMzDiAu%2b96B9guADoxLOvPTJOngPBmEdpZdLug69&TARGET=$SM$https%3a%2f%2fcatdev%2e3m%2ecom%2f'
            browser.driver.get(url);
            browser.driver.findElement(by.name('userName')).sendKeys('a477mzz');
            browser.driver.findElement(by.name('passwd')).sendKeys('Treasure2014');
            browser.driver.findElement(by.name('login')).click();
            browser.manage().getCookies().then(function(data) {
                self.cookies = data;
                console.log("cookies")
                console.log(data);
                console.log("cookies")
            })
    }
}

AuthorizeCatDev=new _AuthorizeCatDev();

