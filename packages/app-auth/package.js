Package.describe({
  name: 'app:auth',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: ''
});


Package.onUse(function(api) {
    api.versionsFrom("METEOR@1.1.0.3");

    // Dependencies
    api.use([
        "app:lib" // always goes first
        // "app:module2" // If your module depends on another, add it.
    ]);

    // Server files
    api.addFiles([
        // "lib/server/modules.js"
    ], "server");

    // Shared files
    api.addFiles([
        "lib/both/users.coffee",
        "lib/both/methods.coffee",
        "lib/both/callbacks.coffee",
        "lib/both/views.coffee",
        "lib/both/helpers.coffee",
        "lib/both/routes.coffee"
    ]);

    // Client files
    api.addFiles([
        'lib/client/templates/auth_layout.jade',
        'lib/client/templates/appAtInput.jade',
        'lib/client/templates/appAtInput.coffee',
        'lib/client/templates/appAtPwdLink.jade',
        'lib/client/templates/appAtPwdLink.coffee',
        'lib/client/templates/appAtPwdFormBtn.jade',
        'lib/client/templates/appAtPwdFormBtn.coffee',
        'lib/client/templates/appAtNavButton.jade',
        'lib/client/templates/appAtNavButton.coffee'
    ], "client");

    // Exports
    api.export("Users");
});


Package.onTest(function (api) {
    // api.use("tinytest");
    api.use("app:module");
});
