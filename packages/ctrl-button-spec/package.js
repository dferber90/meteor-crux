Package.describe({
  name: 'ctrl-button-spec',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ ',
  debugOnly: true
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2');

  api.use([
  	'coffeescript',
  	'templating',
    'ui',
    'spacebars',
  	'http',
  	'respondly:ctrl',
  	'dferber:ui-harness'
  ]);

  api.use('respondly:util@1.0.1');
  api.use('respondly:css-common@1.0.1');
  api.use('respondly:css-stylus@1.0.3');
  api.use('respondly:markdown@1.0.0');
  api.use('respondly:bdd@1.0.1');
  api.use('respondly:data@1.0.1');
  /*
  api.use('respondly:router-server@1.0.1');
  api.use('respondly:router-client@1.0.2');
  */
  api.use('respondly:ctrls@1.0.1');
  api.use('respondly:ctrls-input@1.0.2');
  api.use('respondly:ctrls-log@1.0.2');


  api.addFiles('ctrl-button-spec.coffee', ['client']);
});