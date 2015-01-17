Package.describe({
  name: 'ctrls-util',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.addFiles('ctrls-util.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('ctrls-util');
  api.addFiles('ctrls-util-tests.js');
});
