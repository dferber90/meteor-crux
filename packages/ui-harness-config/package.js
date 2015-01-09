Package.describe({
  name: 'ui-harness-config',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ ',
  debugOnly: true
});

Package.onUse(function(api) {
  api.use([
    'standard-app-packages',
    'iron:router',
    'dferber:ui-harness'
  ]);

  api.versionsFrom('1.0.1');

  api.addFiles([
    'routes.js',
    ], ['client', 'server']
  );
});
