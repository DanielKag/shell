// for bundling
import '@angular/core';
//import '@agnular/compiler'; // We don't need it for AOT
import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import 'zone.js';
import 'reflect-metadata';


import {declareChildApplication, start} from 'single-spa';
import './state.js';

const loadApp = name => () => {  
  return SystemJS.import(`./childApps/${name}/bundle.js`);
}

const isAppActive = name => () => {  
  return window.location.hash.startsWith(`#/${name}`);
}


SystemJS.import('web.config.js').then(data => {

  const {applications_request} = data.config;

  if (!applications_request) {
    throw new Error ("Invalid config file")
  }

  
  fetch(applications_request)
    .then(response => response.json())
    .then(json => json.apps)  
    .then(apps => {
        apps.forEach(app => {
          declareChildApplication(app.name, 
                                  () => SystemJS.import(app.url), 
                                  isAppActive(app.name)); 
        })    
      });

    
start();

})





//
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


// declareChildApplication("pvwa", loadApp('pvwa'), isAppActive('pvwa'));
// declareChildApplication("pta", loadApp('pta'), isAppActive('pta'));
// declareChildApplication("msp", loadApp('msp'), isAppActive('msp'));
// declareChildApplication("vanilla", loadApp('vanilla'), isAppActive('vanilla')) ;



