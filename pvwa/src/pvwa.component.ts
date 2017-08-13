declare var window;

import { Observable, Subject } from 'rxjs/Rx';
//let Component = window.angular.core.Component;
import {select, NgRedux} from '@angular-redux/store'
import {Component, Input, ChangeDetectorRef, ElementRef, ViewChild, OnDestroy} from '@angular/core';
import {IPVWAState} from './main-module';

@Component({
	selector: 'pvwa-app',
	template: `		
				<h1>
					PVWA Works!					
				</h1>				

				<div style="background: grey; width:400px; padding: 20px">
					Current User: <u>{{ currentUser }}</u>					
					<br>
					<h5>Local state</h5>
					Counter: {{ counter$ | async }}
					<button (click)="inc()">Increase</button>
					<button (click)="dec()">Decrease</button>

					<br><br>
					<strong>Send message to the shell:</strong>					
					<br>
					<input #inputMessage (keyup)="sendMessage()" type="text">
				</div>	

				
	
	`
})
export class PVWAApp implements OnDestroy {
	
	@select() counter$;
	@ViewChild('inputMessage') input:ElementRef; 
	public currentUser: string;
	public unsubscribe;
	

	constructor(private store: NgRedux<IPVWAState>, private cdr:ChangeDetectorRef) {
		
		this.currentUser = window.shell.store.getState().currentUser;
		this.unsubscribe = window.shell.store.subscribe(() => {			
			this.currentUser = window.shell.store.getState().currentUser;
			this.cdr.detectChanges();			
		});

	}

	inc() {
    	this.store.dispatch({ type: 'INC' });
  	}
	
	dec() {
    	this.store.dispatch({ type: 'DEC' });
  	}	  

	sendMessage() {		
		const message= this.input.nativeElement.value;
		window.shell.sendMessage('PVWA', message);
	}

    ngOnDestroy(){		
        this.unsubscribe();
    }
}
