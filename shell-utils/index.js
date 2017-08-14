"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var ShellUtils = (function () {
    function ShellUtils() {
    }
    ShellUtils.prototype.getStore = function () {
        if (window.shell && window.shell.store) {
            return window.shell.store;
        }
        else {
            // Return a mock store
            return {
                getState: function () { return ({ currentUser: 'dummy' }); },
                dispatch: function (action) { return null; },
                subscribe: function (fn) { return function (x) { return x; }; }
            };
        }
    };
    ShellUtils.prototype.sendMessage = function (appName, message) {
        if (window.shell && window.shell.sendMessage) {
            window.shell.sendMessage(appName, message);
        }
    };
    ShellUtils = __decorate([
        core_1.Injectable()
    ], ShellUtils);
    return ShellUtils;
}());
exports.ShellUtils = ShellUtils;
