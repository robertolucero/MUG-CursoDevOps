var assert = require('assert'),
    test = require('selenium-webdriver/testing'),
    webdriver = require('selenium-webdriver');

test.describe('Google Search', function () {
    //var driver;
    /*test.before(function () {
        driver = new webdriver.Builder().
            withCapabilities(webdriver.Capabilities.chrome()).
            build();
    });
    test.after(function () {
        driver.quit();
    });*/

    test.it('se fija si aparece la palabra en la busqueda', function () {
        this.timeout(10000);
        var driver = new webdriver.Builder().
            withCapabilities(webdriver.Capabilities.chrome()).
            build();
        driver.get('http://www.google.com');
        var searchBox = driver.findElement(webdriver.By.name('q'));
        searchBox.sendKeys('simple programmer');
        searchBox.getAttribute('value').then(function (value) {
            assert.equal(value, 'simple programmer');
        });
        driver.quit();
    });
    test.it('se fija si aparece la palabra en el titulo luego de buscar', function () {
        var driver = new webdriver.Builder().
            withCapabilities(webdriver.Capabilities.chrome()).
            build();
        this.timeout(10000);
        driver.get('http://www.google.com');
        var searchBox = driver.findElement(webdriver.By.name('q'));
        searchBox.sendKeys('webdriver');
        searchBox.submit();

        driver.wait(webdriver.until.titleContains('webdriver'), 5000);
        driver.quit();
    });

});