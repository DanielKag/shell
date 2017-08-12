import 'zone.js';
import 'reflect-metadata';
import {declareChildApplication, start} from 'single-spa';


// for bundling
import angular from '@angular/core';
//import compiler from '@agnular/compiler';
import platform from '@angular/platform-browser';
import platformDynamic from '@angular/platform-browser-dynamic';
//import zone from 'zone.js';

import './state.js';


const loadApp = name => () => {  
  return SystemJS.import(`./childApps/${name}/bundle.js`);
}

const isAppActive = name => () => {  
  return window.location.hash.startsWith(`#/${name}`);
}


//   const apps = [
//     {name: 'pvwa', url: './childApps/pvwa/bundle.js'},
//     {name: 'pta', url: './childApps/pta/bundle.js'},
//     {name: 'msp', url: './childApps/msp/bundle.js'},
//     {name: 'vanilla', url: './childApps/vanilla/bundle.js'}
//   ]

// const getAppsFromServer = () => 
//   new Promise((resolve, reject) => {
//     setTimeout(() => resolve(apps), 1)
//   }) 

const getAppsFromServer = () => 
              fetch('https://api.myjson.com/bins/st4md')
                .then(response => response.json())
                .then(json => json.apps);

getAppsFromServer()
  .then(apps => {
    apps.forEach(app => {
      declareChildApplication(app.name, 
                              () => SystemJS.import(app.url), 
                              isAppActive(app.name)); 
    })    
  });


// declareChildApplication("pvwa", loadApp('pvwa'), isAppActive('pvwa'));
// declareChildApplication("pta", loadApp('pta'), isAppActive('pta'));
// declareChildApplication("msp", loadApp('msp'), isAppActive('msp'));
// declareChildApplication("vanilla", loadApp('vanilla'), isAppActive('vanilla')) ;

start();

