declare var require;
declare var System;
declare var window;
var declareChildApplication = require('single-spa').declareChildApplication;
var start = require('single-spa').start;

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

const isAppActive = name => () => {      
  return window.location.hash.startsWith(`#/${name}`);
}

const loadApp = name => () => {  
  return System.import(`./${name}/${name}.app.js`);
}

const loadAppFromNodeModules = name => () => {  
  return System.import(`../node_modules/${name}/${name}.app.js`);
}

if (environment.production) {
  enableProdMode();
}


// All the apps
declareChildApplication("pvwa-app", loadApp('pvwa'), isAppActive('pvwa'));
declareChildApplication("msp-app", loadAppFromNodeModules('msp'), isAppActive('msp'));
declareChildApplication("pta-app", loadApp('pta'), isAppActive('pta'));
start();



platformBrowserDynamic().bootstrapModule(AppModule);


console.log('hi');