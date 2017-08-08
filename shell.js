import 'zone.js';
import 'reflect-metadata';



import {declareChildApplication, start} from 'single-spa';


import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import singleSpaAngular2 from 'single-spa-angular2';
import {NgModule, Component} from '@angular/core';
import { RouterModule } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
//import {Navigo} from 'navigo';

window.platformBrowserDynamic = platformBrowserDynamic;
window.BrowserModule = BrowserModule;
window.singleSpaAngular2 = singleSpaAngular2;
window.angular = {
  platformBrowserDynamic,
  BrowserModule,
  core: {
    Component, NgModule
  },
  router: {
    RouterModule
  },
  common: {
    APP_BASE_HREF
  }
}

/*
var root = null;
var useHash = false; // Defaults to: false
var hash = '#'; // Defaults to: '#'
debugger;
var router = new Navigo(root, useHash, hash);


router
  .on('/daniel', function () {
    console.log('this is daniel speaking')
  })
  .resolve();
*/




const loadApp = name => () => {  
  return SystemJS.import(`./${name}/dist/bundle.js`);
}

const isAppActive = name => () => {
  //return window.location.hash.startsWith(`#/${name}`);
  return window.location.hash.startsWith(`#/${name}`);
}

declareChildApplication("pvwa", loadApp('pvwa'), isAppActive('pvwa'));
declareChildApplication("pta", loadApp('pta'), isAppActive('pta'));
declareChildApplication("msp", loadApp('msp'), isAppActive('msp'));

start();

