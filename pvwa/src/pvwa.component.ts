import { Observable, Subject } from 'rxjs/Rx';
import {select, NgRedux} from '@angular-redux/store'
import {Component, Input, ChangeDetectorRef, ElementRef, ViewChild, OnDestroy} from '@angular/core';
import { ShellUtils } from 'shell-utils';
import {IPVWAState} from './main-module';
import { now } from 'moment';

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

				The time is: {{ now }}
	`
})
export class PVWAApp implements OnDestroy {
	
	@select() counter$;
	@ViewChild('inputMessage') input:ElementRef; 
	public currentUser: string;
	public unsubscribe;
	public now;
	
	constructor(private shell: ShellUtils, private store: NgRedux<IPVWAState>, private cdr:ChangeDetectorRef) {										

		this.currentUser = shell.getStore().getState().currentUser;
		this.unsubscribe = shell.getStore().subscribe(() => {			
			this.currentUser = shell.getStore().getState().currentUser;
			this.cdr.detectChanges();			
		});

		this.now = now();

	}

	inc() {
    	this.store.dispatch({ type: 'INC' });
  	}
	
	dec() {
    	this.store.dispatch({ type: 'DEC' });
  	}	  

	sendMessage() {		
		const message= this.input.nativeElement.value;
		this.shell.sendMessage('PVWA', message);
	}

    ngOnDestroy(){		
        this.unsubscribe();
    }
}
