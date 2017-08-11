declare var window;
//let Component = window.angular.core.Component;
import {select, NgRedux} from '@angular-redux/store'
import {Component} from '@angular/core';
import {IPVWAState} from './main-module';

@Component({
	selector: 'pvwa-app',
	template: `		
				<h1>
					PVWA Works!					
				</h1>	

				<div style="background: grey; width:400px">
					<h3>State Management</h3>
					<h5>Global state</h5>
					Current User: {{ getCurrentUser() }}					
					<br>
					<h5>Local state</h5>
					Counter: {{ counter$ | async }}
					<button (click)="inc()">Increase</button>
					<button (click)="dec()">Decrease</button>
				</div>		
	`,
})
export class PVWAApp {
	
	@select() counter$;
	constructor(private store: NgRedux<IPVWAState>) {
	}

	inc() {
    	this.store.dispatch({ type: 'INC' });
  	}
	
	dec() {
    	this.store.dispatch({ type: 'DEC' });
  	}	  

	getCurrentUser() {
		return window.shell.store.getState()
	}
}
