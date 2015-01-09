Package.describe({
  name: 'ctrl',
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
    'respondly:ctrl',
    'dferber:ui-harness'
  ]);
  api.addFiles([
    'lib/exports.js',
    'lib/ctrl.html',
    'lib/ctrl.coffee'
  ], 'client');
});