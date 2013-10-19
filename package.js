Package.describe({
    summary: "a means of displaying messages to the user"
});

Package.on_use(function (api, where) {
    api.use([
      'minimongo',
      'mongo-livedata',
      'templating',
      'handlebars'
      ], 'client'
      );

    api.add_files([
      'lib/flashes.js',
      'lib/flashes_list.html',
      'lib/flashes_list.js',
      'lib/gritter.min.js',
      'lib/images/gritter.png',
      'lib/css/gritter.css',
      'lib/jquery_modal.min.js',
      'lib/css/jquery_modal.css'
      ], 'client'
    );

    if (api.export)
        api.export('Flashes');
});

Package.on_test(function(api) {
  api.use('flashes', 'client');
  api.use(['tinytest', 'test-helpers'], 'client');

  api.add_files('flashes_tests.js', 'client');
});