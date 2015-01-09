require('../data/globals.js');


var testData = {
	teamName: "Barfuß Bethlehem"
}


module.exports = {

	"Can add a team": function (browser) {

	var baseurl = this.client.launch_url,
		data = browser.globals;

	browser
		.url(baseurl + route.teams)
		.waitForElementPresent('body', timing.timeout)
		.waitForElementVisible(selectors.teams.name, timing.timeout)
		.setValue(selectors.teams.name, testData.teamName)
		.click(selectors.teams.submitButton)
		.pause(timing.pause)
		.assert.containsText(selectors.teams.list, testData.teamName)
		.end();
	}

};