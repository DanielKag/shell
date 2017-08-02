import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MSPApp} from './msp.component';
import {enableProdMode} from '@angular/core';

//enableProdMode()

@NgModule({
  imports: [BrowserModule],
  declarations: [MSPApp],
  bootstrap: [MSPApp]
})
export default class MainModule {
}
