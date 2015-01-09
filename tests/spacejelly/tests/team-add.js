var defaultTimeout = 1000;

var selectors = {
	teamName: 'input[name=team-name]',
	submitButton: 'button',
	teamList: 'ul'
};

var testData = {
	teamName: "Barfuß Bethlehem"
}


module.exports = {

	"Can add a team": function (browser) {

	var baseurl = this.client.launch_url,
		data = browser.globals;

	browser
		.url(baseurl + data.paths.teams)
		.waitForElementPresent('body', defaultTimeout)
		.waitForElementVisible(selectors.teamName, defaultTimeout)
		.setValue(selectors.teamName, testData.teamName)
		.click(selectors.submitButton)
		.pause(defaultTimeout / 2)
		.assert.containsText(selectors.teamList, testData.teamName)
		.end();
	}

};