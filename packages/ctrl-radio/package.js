Package.describe({
  name: 'ctrl-radio',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});


Package.onUse(function(api) {
  api.versionsFrom('1.0.2');
  
  api.use([
  	'coffeescript',
  	'templating',
  	'http',
    'less',
  	'respondly:ctrl',
    'ctrl-common-style',
    'ctrls-util'
  ]);

  api.addFiles([
  	'ctrl-radio.html',
  	'ctrl-radio.js'
  ], 'client');
});