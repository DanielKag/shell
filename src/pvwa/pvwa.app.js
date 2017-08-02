
//import 'zone.js';
//import 'reflect-metadata';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import singleSpaAngular2 from 'single-spa-angular2';
import mainModule from './main-module.ts';

const ng2Lifecycles = singleSpaAngular2({
	domElementGetter,
	mainModule,
	angularPlatform: platformBrowserDynamic(),
	template: `<pvwa-app />`,
})

export const bootstrap = [
	ng2Lifecycles.bootstrap,
];

export const mount = [
	ng2Lifecycles.mount,
];

export const unmount = [
	ng2Lifecycles.unmount,
];

function domElementGetter() {
	return document.getElementById('cyb-root');
}



// export function bootstrap() {
//   return Promise.resolve();
// }

// export function mount() {
//   /* This is normally where you would have your framework-specific code like
//    * ReactDOM.render or angular.bootstrap(). The fact that you can put *anything*
//    * into this function is what makes single-spa so powerful -- any framework
//    * can implement a "mount" and "unmount" to become a single-spa application.
//    */
//   return Promise.resolve()
//     .then(() => {
//       document.getElementById("cyb-root").innerHTML = `
//         <div>
//           Hello PVWA!
//         <div>
//       `
//     })
// }

// export function unmount() {
//   /* Real world use cases would be something like ReactDOM.unmountComponentAtNode()
//    * or vue.$destroy()
//    */
//   return Promise.resolve()
//     .then(() => {
//       document.getElementById("user-app").innerHTML = '';
//     })
// }
