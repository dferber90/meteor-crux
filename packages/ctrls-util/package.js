Package.describe({
  name: 'ctrls-util',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');

  api.use([
    'underscore',
    'coffeescript'
  ]);

  api.addFiles([
    'lib/util.js',
    'lib/stamps/Stamps.js',
    'lib/stamps/auto-run.js',
    'lib/stamps/events.js',
    'lib/classes/UserAgent.coffee'
  ]);

  api.addFiles([
    'client/dom/browser.coffee'
  ], 'client');

  api.export('Stamps');
  api.export('Util');
});
