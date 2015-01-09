require('../data/globals.js');

var testData = {
	oops: "Oops"
};


module.exports = {

	"Does not contain UIHarness": function (browser) {

	var baseurl = this.client.launch_url,
		data = browser.globals;

	browser
		.url(baseurl + route.uiharness)
		.waitForElementPresent(selectors.body, timing.timeout)
		.waitForElementPresent(selectors.oops, timing.timeout)
		.assert.containsText(selectors.body, testData.oops)
		.end();
	}

};