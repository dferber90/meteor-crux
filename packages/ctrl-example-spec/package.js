Package.describe({
  name: 'ctrl-example-spec',
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
    'ui',
    'spacebars',
    'http',
    'respondly:ctrl',
    'dferber:ui-harness'
  ]);

  api.use('respondly:util');
  api.use('respondly:css-common@1.0.1');
  api.use('respondly:css-stylus@1.0.3');
  api.use('respondly:markdown@1.0.0');
  api.use('respondly:bdd@1.0.1');
  api.use('respondly:data@1.0.1');
  /*
  api.use('respondly:router-server@1.0.1');
  api.use('respondly:router-client@1.0.2');
  */
  api.use('respondly:ctrls@1.0.1');
  api.use('respondly:ctrls-input@1.0.2');
  api.use('respondly:ctrls-log@1.0.2');


  api.addFiles('ctrl-example-spec.js', ['client']);
});