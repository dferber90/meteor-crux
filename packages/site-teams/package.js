Package.describe({
  name: 'site-teams',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.use([
  	'standard-app-packages',
  	'teams',
  	'iron:router',
    'respondly:ctrl',
    'ctrls-input',
    'ctrl-button',
  ]);

  api.use('site-team', {
    unordered: true
  });

  api.addFiles('routes.js');
  api.addFiles('lib/site-teams.html');
  api.addFiles(['lib/site-teams.js'], 'client');
});