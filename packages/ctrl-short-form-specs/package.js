Package.describe({
  name: 'ctrl-short-form-specs',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.addFiles('ctrl-short-form-specs.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('ctrl-short-form-specs');
  api.addFiles('ctrl-short-form-specs-tests.js');
});
