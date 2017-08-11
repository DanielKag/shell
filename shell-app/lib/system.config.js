var angularVersion = '@4.1.2';

System.config({
  //use typescript for compilation
  transpiler: 'plugin-babel',
  //typescript compiler options
  typescriptOptions: {
    emitDecoratorMetadata: true
  },
  paths: {
    'npm:': 'https://unpkg.com/',
    'local:': '../node_modules/'
  },
  //map tells the System loader where to look for things
  map: {
    
    'app': './src',
    '@angular/core': 'npm:@angular/core'+ angularVersion + '/bundles/core.umd.js',
    '@angular/common': 'npm:@angular/common' + angularVersion + '/bundles/common.umd.js',
    '@angular/compiler': 'npm:@angular/compiler' + angularVersion  + '/bundles/compiler.umd.js',
    '@angular/platform-browser': 'npm:@angular/platform-browser' + angularVersion + '/bundles/platform-browser.umd.js',
    '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic' + angularVersion + '/bundles/platform-browser-dynamic.umd.js',
    '@angular/http': 'npm:@angular/http' + angularVersion + '/bundles/http.umd.js',
    '@angular/router': 'npm:@angular/router' + angularVersion +'/bundles/router.umd.js',
    '@angular/forms': 'npm:@angular/forms' + angularVersion + '/bundles/forms.umd.js',
    '@angular/animations': 'npm:@angular/animations' + angularVersion + '/bundles/animations.umd.js',
    '@angular/platform-browser/animations': 'npm:@angular/platform-browser' + angularVersion + '/bundles/platform-browser-animations.umd.js',
    '@angular/animations/browser': 'npm:@angular/animations' + angularVersion + '/bundles/animations-browser.umd.js',
    
    '@angular/core/testing': 'npm:@angular/core' + angularVersion + '/bundles/core-testing.umd.js',
    '@angular/common/testing': 'npm:@angular/common' + angularVersion + '/bundles/common-testing.umd.js',
    '@angular/compiler/testing': 'npm:@angular/compiler' + angularVersion + '/bundles/compiler-testing.umd.js',
    '@angular/platform-browser/testing': 'npm:@angular/platform-browser' + angularVersion + '/bundles/platform-browser-testing.umd.js',
    '@angular/platform-browser-dynamic/testing': 'npm:@angular/platform-browser-dynamic' + angularVersion + '/bundles/platform-browser-dynamic-testing.umd.js',
    '@angular/http/testing': 'npm:@angular/http' + angularVersion + '/bundles/http-testing.umd.js',
    '@angular/router/testing': 'npm:@angular/router' + angularVersion + '/bundles/router-testing.umd.js',
    'tslib': 'npm:tslib@1.6.1',
    'rxjs': 'npm:rxjs',
    'typescript': 'npm:typescript@2.2.1/lib/typescript.js',
    'plugin-babel': './node_modules/systemjs-plugin-babel/plugin-babel.js',
    'systemjs-babel-build': './node_modules/systemjs-plugin-babel/systemjs-babel-browser.js',

    'single-spa': 'local:single-spa/lib/single-spa.js'    ,
    'single-spa-angular2': 'local:single-spa-angular2/lib/single-spa-angular2.js'    

  },
  //packages defines our app package
//   packages: {
//     app: {
//       main: './main.ts',
//       defaultExtension: 'ts'
//     },
//     rxjs: {
//       defaultExtension: 'js'
//     }
//   }


// Original
/*
           SystemJS.config({
                meta: {
                // meaning [baseURL]/vendor/angular.js when no other rules are present
                // path is normalized using map and paths configuration
                './node_modules\lodash\lodash.min.js': {
                  format: 'global', // load this module as a global
                  exports: 'lodash2' // the global property to take as the module value              
                }
              },
                map: {                  
                  '@angular/core': './node_modules/@angular/core/bundles/core.umd.js',
                    'plugin-babel': './node_modules/systemjs-plugin-babel/plugin-babel.js',
                    'systemjs-babel-build': './node_modules/systemjs-plugin-babel/systemjs-babel-browser.js'
                },
                transpiler: 'plugin-babel'
              });
              
              SystemJS.import('@angular/core');
*/


});