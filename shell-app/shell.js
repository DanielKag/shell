//import 'zone.js';
//import 'reflect-metadata';


import {declareChildApplication, start} from 'single-spa';

const loadApp = name => () => {  
  return SystemJS.import(`./childApps/${name}/bundle.js`);
}

const isAppActive = name => () => {  
  return window.location.hash.startsWith(`#/${name}`);
}


const getAppsFromServer = () => 
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(['pvwa','pta','msp', 'vanilla']), 1)
  }) 

getAppsFromServer()
  .then(apps => {
    apps.forEach(app => {
      declareChildApplication(app, loadApp(app), isAppActive(app));    
    })    
  })


// declareChildApplication("pvwa", loadApp('pvwa'), isAppActive('pvwa'));
// declareChildApplication("pta", loadApp('pta'), isAppActive('pta'));
// declareChildApplication("msp", loadApp('msp'), isAppActive('msp'));
// declareChildApplication("vanilla", loadApp('vanilla'), isAppActive('vanilla')) ;

start();

