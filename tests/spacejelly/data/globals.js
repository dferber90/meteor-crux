global.timing = {
	pause: 500,
	longPause: 3000,
	timeout: 1000
};

global.selectors = {
	body: 'body',
	oops: 'div',
	teams: {
		name: 'input[name=team-name]',
		submitButton: 'button',
		list: 'ul'
	}
};


// can be prepended to http://localhost:4096/ in tests
global.route = {
	home: '',
	uiharness: 'uiharness',
	teams: 'teams'
};

global.getRoute = function (route) {
	return this.client.launch_url + route;
};