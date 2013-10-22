Package.describe({
    summary: "Sends flash messages and persistent notifications to the user"
});

Package.on_use(function (api, where) {
    api.use([
      'minimongo',
      'mongo-livedata',
      'templating',
      'underscore',
      'handlebars'
      ], 'client'
      );

    api.add_files([
      'lib/flash_notify_client.js',
      'lib/flashes_list.html',
      'lib/notifications.html',
      'lib/notifications.js',
      'lib/flashes_list.js',
      'lib/css/flash_notify.css',
      'lib/gritter.min.js',
      'lib/images/gritter.png',
      'lib/css/gritter.css'
      ], 'client'
    );

    api.add_files([
      'lib/flash_notify_common.js'
      ], ['server', 'client']
    );

    api.add_files([
      'lib/flash_notify_server.js'
      ], 'server'
    );


    if (api.export)
      api.export('FlashNotify');
});

Package.on_test(function(api) {
  api.use('flash-notify', 'client');
  api.use(['tinytest', 'test-helpers'], 'client');

  api.add_files('flash_notify_tests.js', 'client');
});