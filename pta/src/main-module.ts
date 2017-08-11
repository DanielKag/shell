//declare var window;
//let NgModule = window.angular.core.NgModule;
//let BrowserModule = window.angular.BrowserModule;

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {PTAApp} from './pta.component';


@NgModule({
  imports: [BrowserModule],
  declarations: [PTAApp],
  bootstrap: [PTAApp]
})
export default class MainModule {
}
