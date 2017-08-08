define(function() { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_module__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_module___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__main_module__);

//import 'zone.js';
//import 'reflect-metadata';
//import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

let platformBrowserDynamic = window.angular.platformBrowserDynamic;
let singleSpaAngular2 = window.singleSpaAngular2;


const ng2Lifecycles = singleSpaAngular2({
	domElementGetter,
	mainModule: __WEBPACK_IMPORTED_MODULE_0__main_module___default.a,
	angularPlatform: platformBrowserDynamic(),
	template: `<pvwa-app />`,
})

const bootstrap = [
	ng2Lifecycles.bootstrap,
];
/* harmony export (immutable) */ __webpack_exports__["bootstrap"] = bootstrap;


const mount = [
	ng2Lifecycles.mount,
];
/* harmony export (immutable) */ __webpack_exports__["mount"] = mount;


const unmount = [
	ng2Lifecycles.unmount,
];
/* harmony export (immutable) */ __webpack_exports__["unmount"] = unmount;


function domElementGetter() {
	return document.getElementById('main-app');
}




/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var NgModule = window.angular.core.NgModule;
var BrowserModule = window.angular.BrowserModule;
var RouterModule = window.angular.router.RouterModule;
var APP_BASE_HREF = window.angular.common.APP_BASE_HREF;
var pvwa_component_1 = __webpack_require__(2);
var safes_component_1 = __webpack_require__(3);
var accounts_component_1 = __webpack_require__(4);
function MyAwesomeMatcher(url) {
    debugger;
    if (url.length === 0) {
        return null;
    }
    //const reg = /^(awesome-path)$/;
    var reg = /^(.*safes)$/;
    var param = url[0].toString();
    if (param.match(reg)) {
        // myValue: "awesome-path"
        return ({ consumed: url, posParams: { myValue: url[0] } });
    }
    return null;
}
exports.MyAwesomeMatcher = MyAwesomeMatcher;
var appRoutes = [
    { path: 'pvwa', children: [
            { path: 'safes', component: safes_component_1.SafesComponent },
            { path: 'accounts', component: accounts_component_1.AccountsComponent }
        ] },
    { path: '**', component: accounts_component_1.AccountsComponent }
];
// /*
// { matcher: MyAwesomeMatcher, component: SafesComponent },
// //{ path: '#/pvwa/safes',    component: SafesComponent },
//   { path: '**', component: AccountsComponent } 
// /*{ path: '',
// children: [    
// ]    
// } */ 
var MainModule = (function () {
    function MainModule() {
    }
    MainModule = __decorate([
        NgModule({
            imports: [
                RouterModule.forRoot(appRoutes, { enableTracing: false, useHash: true } // <-- debugging purposes only
                ),
                BrowserModule
            ],
            declarations: [pvwa_component_1.PVWAApp, safes_component_1.SafesComponent, accounts_component_1.AccountsComponent],
            //providers: [{provide: APP_BASE_HREF, useValue : '/#/pvwa' }],
            bootstrap: [pvwa_component_1.PVWAApp]
        })
    ], MainModule);
    return MainModule;
}());
exports["default"] = MainModule;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.__esModule = true;
var Component = window.angular.core.Component;
var PVWAApp = (function () {
    function PVWAApp() {
    }
    PVWAApp = __decorate([
        Component({
            selector: 'pvwa-app',
            template: "\t\t\n\t\t\t\t<h1>\n\t\t\t\t\tPVWA\n\t\t\t\t</h1>\t\t\t\t\n\n\t\t\t\t<nav>\n\t\t\t\t\t<a routerLink=\"pvwa/accounts\" routerLinkActive=\"active\">Accounts</a>\n\t\t\t\t\t<a routerLink=\"pvwa/safes\" routerLinkActive=\"active\">Safes</a>\n\t\t\t\t</nav>\n\n\t\t\t\t<router-outlet></router-outlet>\t\t\t\t\n\t"
        }),
        __metadata("design:paramtypes", [])
    ], PVWAApp);
    return PVWAApp;
}());
exports.PVWAApp = PVWAApp;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.__esModule = true;
var Component = window.angular.core.Component;
var SafesComponent = (function () {
    function SafesComponent() {
    }
    SafesComponent = __decorate([
        Component({
            selector: 'safes',
            template: "\t\t\n\t\t\t\t<h3>\n\t\t\t\t\tSafes\n\t\t\t\t</h3>\t\t\t\n\t"
        }),
        __metadata("design:paramtypes", [])
    ], SafesComponent);
    return SafesComponent;
}());
exports.SafesComponent = SafesComponent;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.__esModule = true;
var Component = window.angular.core.Component;
var AccountsComponent = (function () {
    function AccountsComponent() {
    }
    AccountsComponent = __decorate([
        Component({
            selector: 'accounts',
            template: "\t\t\n\t\t\t\t<h3>\n\t\t\t\t\tAccounts\n\t\t\t\t</h3>\t\t\t\n\t"
        }),
        __metadata("design:paramtypes", [])
    ], AccountsComponent);
    return AccountsComponent;
}());
exports.AccountsComponent = AccountsComponent;


/***/ })
/******/ ])});;