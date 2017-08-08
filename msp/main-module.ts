declare var window;
let NgModule = window.angular.NgModule;
let BrowserModule = window.BrowserModule;
import {MSPApp} from './msp.component.js';


@NgModule({
  imports: [BrowserModule],
  declarations: [MSPApp],
  bootstrap: [MSPApp]
})
export default class MainModule {
}
