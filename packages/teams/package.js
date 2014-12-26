Package.describe({
  name: 'teams',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.use([
    'standard-app-packages',
    'underscore',
    'richsilv:stampit'
  ]);
  api.versionsFrom('1.0.2');
  api.addFiles('lib/exports.js');
  api.addFiles('lib/methods.js');
  api.addFiles('lib/teams.js');

  api.export(['Teams']);
});

Package.onTest(function (api) {
  api.use([
    'coffeescript',
    'practicalmeteor:munit'
  ]);
  api.use('teams');

  api.addFiles('tests/teams.coffee');
});