declare var window;

import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
	selector: 'pta-app',
	template: `		
				<h1>
					PTA Works!					
				</h1>	

				<div style="background: grey; width:400px; padding: 20px">
					<strong>Send message to the shell:</strong>					
					<br>
					<input #inputMessage (keyup)="sendMessage()" type="text">
				</div>			
	`,
})
export class PTAApp {
	
	@ViewChild('inputMessage') input:ElementRef; 

	constructor() {		
	}

	sendMessage() {		
		const message= this.input.nativeElement.value;
		window.shell.sendMessage('PTA', message);
	}
}
