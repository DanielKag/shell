import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {PTAApp} from './pta.component';
import {enableProdMode} from '@angular/core';

//enableProdMode()

@NgModule({
  imports: [BrowserModule],
  declarations: [PTAApp],
  bootstrap: [PTAApp]
})
export default class MainModule {
}
