declare var window;
let NgModule = window.angular.core.NgModule;
let BrowserModule = window.angular.BrowserModule;
import {PTAApp} from './pta.component';


@NgModule({
  imports: [BrowserModule],
  declarations: [PTAApp],
  bootstrap: [PTAApp]
})
export default class MainModule {
}
