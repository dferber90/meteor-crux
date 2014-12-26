Package.describe({
  name: 'site-team',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.use([
    'standard-app-packages',
    'teams',
    'iron:router'
  ]);

  api.use('site-teams', {
    unordered: true
  });

  api.addFiles('routes.js');
  api.addFiles('lib/site-team.html');
  api.addFiles(['lib/site-team.js'], 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('site-team');
  api.addFiles('site-team-tests.js');
});
