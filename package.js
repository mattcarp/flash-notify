Package.describe({
    summary: "a means of displaying messages to the user"
});

Package.on_use(function (api, where) {
    api.use(['minimongo', 'mongo-livedata', 'templating'], 'client');

    api.add_files(['flashes.js', 'flashes_list.html', 'flashes_list.js'], 'client');

    if (api.export)
        api.export('Flashes');
});

Package.on_test(function(api) {
  api.use('flashes', 'client');
  api.use(['tinytest', 'test-helpers'], 'client');  

  api.add_files('flashes_tests.js', 'client');
});