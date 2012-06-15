var channel = require('cordova/channel');

module.exports = {
    platform: "PlayBook",
    version: blackberry.system.softwareVersion,
    name: blackberry.system.model,
    uuid: blackberry.identity.PIN,
    cordova: "1.8.0"
};

channel.onCordovaInfoReady.fire();
