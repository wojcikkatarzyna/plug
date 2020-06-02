// Empty constructor
function Plug() {}

// The function that passes work along to native shells
// Message is a string, duration may be 'long' or 'short'
Plug.prototype.show = function(message, duration, successCallback, errorCallback) {
    var options = {};
    options.message = message;
    options.duration = duration;
    cordova.exec(successCallback, errorCallback, 'Plug', 'show', [options]);
}

// Installation constructor that binds Plug to window
Plug.install = function() {
    if (!window.plugins) {
        window.plugins = {};
    }
    window.plugins.plug = new Plug();
    return window.plugins.plug;
};
cordova.addConstructor(Plug.install);
