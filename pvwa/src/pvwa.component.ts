declare var window;

import { Observable, Subject } from 'rxjs/Rx';
//let Component = window.angular.core.Component;
import {select, NgRedux} from '@angular-redux/store'
import {Component, Input, ChangeDetectionStrategy} from '@angular/core';
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
					
					Current User: <button (click)="getCurrentUser()"> {{ currentUser }} </button>					
					<br>
					<h5>Local state</h5>
					Counter: {{ counter$ | async }}
					<button (click)="inc()">Increase</button>
					<button (click)="dec()">Decrease</button>
				</div>		
	`
})
export class PVWAApp {
	
	@select() counter$;
	public currentUser: string;

	constructor(private store: NgRedux<IPVWAState>) {
		this.getCurrentUser();
	}

	inc() {
    	this.store.dispatch({ type: 'INC' });
  	}
	
	dec() {
    	this.store.dispatch({ type: 'DEC' });
  	}	  

	getCurrentUser() {
		this.currentUser = window.shell.store.getState()
	}
}
