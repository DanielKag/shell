declare var window;
let NgModule = window.angular.core.NgModule;
let BrowserModule = window.angular.BrowserModule;
import {MSPApp} from './msp.component';


@NgModule({
  imports: [BrowserModule],
  declarations: [MSPApp],
  bootstrap: [MSPApp]
})
export default class MainModule {
}
