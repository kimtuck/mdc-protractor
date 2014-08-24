var TestDiagnostics = (function () {

    var fs = require('fs');
    var path = require('path');

    var reportDir;
    var consoleLogsDir;
    var screenshotsDir;

    var init = function() {
        reportDir = path.resolve(__dirname + '/../report/');
        consoleLogsDir = path.resolve(reportDir + '/logs/');
        screenshotsDir = path.resolve(reportDir + '/screenshots/');
        screenshotsDir=consoleLogsDir; // override, I like this better

        if (!fs.existsSync(reportDir)) {
            fs.mkdirSync(reportDir);
        }
        if (!fs.existsSync(consoleLogsDir)) {
            fs.mkdirSync(consoleLogsDir);
        }
        if (!fs.existsSync(screenshotsDir)) {
            fs.mkdirSync(screenshotsDir);
        }
    }

    var pathOf=function(p) {
        var p2 = p.replace(':','-').replace(':','-').replace(':','-').replace('(','').replace(')','')
        return p2;
    }

// Add global spec helpers in this file
    var getDateStr = function () {
        var d = (new Date() + '').replace(new RegExp(':', 'g'), '-').split(' ');
        // "2013-Sep-03-21:58:03"
        return [d[3], d[1], d[2], d[4]].join('-');
    };

    var errorCallback = function (err) {
        console.log(err);
    };

// create a new javascript Date object based on the timestamp
    var timestampToDate = function (unix_timestamp) {
        var date = new Date(unix_timestamp);
        // hours part from the timestamp
        var hours = date.getHours();
        // minutes part from the timestamp
        var minutes = date.getMinutes();
        // seconds part from the timestamp
        var seconds = date.getSeconds();

        var timeValues = [hours, minutes, seconds];
        timeValues.forEach(function (val) {
            if (val.length < 2) {
                // padding
                val = '0' + val;
            }
        });
        // will display time in 10:30:23 format
        return hours + ':' + minutes + ':' + seconds;
    };

    var afterTest = function() {
        var passed = jasmine.getEnv().currentSpec.results().passed();
        var specName = jasmine.getEnv().currentSpec.description.replace(new RegExp('[ :]', 'g'), '-');
        console.log(specName + ' passed: ' + passed)
        if (passed)
            return;
        captureLogs('TestFailure');
        captureScreenshot('TestFailure');
        captureHtml('TestFailure');
    };

    var captureLogs = function(label) {
        // Flush browser console to file
        var specName = jasmine.getEnv().currentSpec.description.replace(new RegExp('[ :]', 'g'), '-');
        var baseFileName = pathOf(specName + '-' + getDateStr());
        var logFileName = path.resolve(consoleLogsDir + '/' + baseFileName + '-' + label + '.txt');


        fs.appendFileSync(logFileName, jasmine.getEnv().currentSpec.description + '\r\n', {encoding: 'utf8'}, errorCallback);
        var stackTrace='';
        var items = jasmine.getEnv().currentSpec.results_.items_;
        for (var i = 0; i < items.length; i++) {
            if (items[i].passed_ == false) {
                fs.appendFileSync(logFileName, items[i].trace.stack + '\r\n', {encoding: 'utf8'}, errorCallback);
                console.log(items[i].trace.stack);
            }
        }

        var logs = browser.driver.manage().logs();
        var logType = 'browser';
        logs.getAvailableLogTypes().then(function (logTypes) {
            if (logTypes.indexOf(logType) > -1) {
                browser.driver.manage().logs().get(logType).then(function (logsEntries) {
                    var len = logsEntries.length;
                    for (var i = 0; i < len; ++i) {
                        var logEntry = logsEntries[i];
                        var msg = timestampToDate(logEntry.timestamp) + ' ' + logEntry.type + ' ' + logEntry.message;
                        fs.appendFileSync(logFileName, msg + '\r\n', {encoding: 'utf8'}, errorCallback);
                    }
                }, errorCallback);
            }
        });
    }

    var captureHtml = function(label) {
        var specName = jasmine.getEnv().currentSpec.description.replace(new RegExp(' ', 'g'), '-');
        var baseFileName = pathOf(specName + '-' + getDateStr());
        var fileName = path.resolve(consoleLogsDir + '/' + baseFileName + '-' + label + '.html');
        browser.driver.getPageSource().then(function(source) {
            fs.writeFileSync(fileName, source, {}, function (err) { console.log(err); });
        });
    };

// Take a screenshot automatically after each failing test.
    var captureScreenshot = function(label) {
        var specName = jasmine.getEnv().currentSpec.description.replace(new RegExp(' ', 'g'), '-');
        var baseFileName = pathOf(specName + '-' + getDateStr());
        var pngFileName = path.resolve(screenshotsDir + '/' + baseFileName + '-' + label + '.png');
        browser.takeScreenshot().then(function (png) {
            // Do something with the png...
            fs.writeFileSync(pngFileName, png, {encoding: 'base64'}, function (err) {
                console.log(err);
            });
        }, errorCallback);
    };

    init();

    // Reveal public pointers to
    // private functions and properties

    return {
        captureHtml: captureHtml,
        captureLogs: captureLogs,
        captureScreenshot: captureScreenshot,
        afterTest: afterTest
    };

})();

// Wire up an afterEach for all tests
afterEach(function () {
    TestDiagnostics.afterTest();
});

