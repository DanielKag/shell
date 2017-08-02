import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {PVWAApp} from './pvwa.component';
import {enableProdMode} from '@angular/core';

//enableProdMode()

@NgModule({
  imports: [BrowserModule],
  declarations: [PVWAApp],
  bootstrap: [PVWAApp]
})
export default class MainModule {
}
