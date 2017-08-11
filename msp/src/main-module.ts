//declare var window;
//let NgModule = window.angular.core.NgModule;
//let BrowserModule = window.angular.BrowserModule;

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MSPApp} from './msp.component';


@NgModule({
  imports: [BrowserModule],
  declarations: [MSPApp],
  bootstrap: [MSPApp]
})
export default class MainModule {
}
