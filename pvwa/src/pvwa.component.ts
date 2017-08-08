declare var window;
let Component = window.angular.core.Component;

@Component({
	selector: 'pvwa-app',
	template: `		
				<h1>
					PVWA
				</h1>				

				<nav>
					<a routerLink="pvwa/accounts" routerLinkActive="active">Accounts</a>
					<a routerLink="pvwa/safes" routerLinkActive="active">Safes</a>
				</nav>

				<router-outlet></router-outlet>				
	`,
})
export class PVWAApp {
	
	constructor() {		
	}
}
