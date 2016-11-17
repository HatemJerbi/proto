Package.describe({
    name: "framework:core",
    summary: "Framework core package",
    version: "0.1.0",
    git: ""
});

Package.onUse(function (api) {

    api.versionsFrom("METEOR@1.4");

    var packages = [
        'meteor-base@1.0.4',
        'mobile-experience@1.0.4',
        'mongo@1.1.14',
        'reactive-var@1.0.11',
        'jquery@1.11.10',
        'tracker@1.1.1',
        'standard-minifier-css@1.3.2',
        'standard-minifier-js@1.2.1',
        'es5-shim@4.6.15',
        'ecmascript@0.5.9',
        'shell-server@0.2.1'
    ];

    api.use(packages);

    api.imply(packages);

    api.mainModule("lib/server.js", "server");
    api.mainModule("lib/client.js", "client");

});