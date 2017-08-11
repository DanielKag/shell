//declare var window;
//let NgModule = window.angular.core.NgModule;
//let BrowserModule = window.angular.BrowserModule;

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {PVWAApp} from './pvwa.component';
import {NgReduxModule, NgRedux} from '@angular-redux/store';


export interface IPVWAState { counter: number };

const pvwaReducer = (state, action) => {  
  switch (action.type) {
    case 'INC':      
      return {counter: state.counter + 1}    
    case 'DEC':
      return {counter: state.counter - 1}
    default:
      return state;
  }
}

const initialState = {counter: 1}


@NgModule({
  imports: [NgReduxModule, BrowserModule],
  declarations: [PVWAApp],
  bootstrap: [PVWAApp]
})
export default class MainModule {
  constructor(ngRedux: NgRedux<IPVWAState>) {
    ngRedux.configureStore(pvwaReducer, initialState);
  }
}
