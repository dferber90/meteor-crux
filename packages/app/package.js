Package.describe({
  name: 'app',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.use(['standard-app-packages', 'iron:router']);
  api.versionsFrom('1.0.1');
  api.use(['respondly:css-stylus']);
  api.addFiles([
  	'app.html',
  	'routes.js'
  ], ['client', 'server']);
  api.addFiles([
  	'stylesheets/main.css'
  ], 'client');
});
