import 'zone.js';
import 'reflect-metadata';



import {declareChildApplication, start} from 'single-spa';


import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import singleSpaAngular2 from 'single-spa-angular2';
import {NgModule, Component} from '@angular/core';

window.platformBrowserDynamic = platformBrowserDynamic;
window.BrowserModule = BrowserModule;
window.singleSpaAngular2 = singleSpaAngular2;
window.angular = {
  Component, NgModule
}


const loadApp = name => () => {
  return SystemJS.import(`./${name}/${name}.app.js`);
}

const isAppActive = name => () => {
  return window.location.hash.startsWith(`#/${name}`);
}

declareChildApplication("pvwa", loadApp('pvwa'), isAppActive('pvwa'));
declareChildApplication("pta", loadApp('pta'), isAppActive('pta'));
declareChildApplication("msp", loadApp('msp'), isAppActive('msp'));

start();

