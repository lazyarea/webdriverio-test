var assert = require('assert');

describe('webdriver.io page', function() {
    it('should have the right title - the fancy generator way', function () {
        browser.url('http://www.lazyarea.com');
        var title = browser.getTitle();
        assert.equal(title, 'lazyarea - Digital Agency One Page Template');
        browser.pause(5000);
    });
});
