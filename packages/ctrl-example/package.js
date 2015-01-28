Package.describe({
  name: 'ctrl-example',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});




Package.onUse(function(api) {
  api.versionsFrom('1.0.2');
  
  api.use([
    'coffeescript',
    'templating',
    'http',
    'less',
    'respondly:ctrl',
    'ctrl-common-style',
    'ctrls-util'
  ]);

  api.addFiles([
    'ctrl-example.html',
    'ctrl-example.js'
  ], 'client');
});