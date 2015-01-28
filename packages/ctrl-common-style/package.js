Package.describe({
	name: 'ctrl-common-style',
	summary: ' /* Fill me in! */ ',
	version: '1.0.0',
	git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
	api.versionsFrom('1.0.2.1');
	api.use([
		'less'
	]);
	api.addFiles([
		'components/ctrls-input/ctrl-button.import.less',
		'components/ctrls-input/ctrl-radio.import.less',
		'ctrl-common-style.less'
	]);
});