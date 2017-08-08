declare var window;
let NgModule = window.angular.core.NgModule;
let BrowserModule = window.angular.BrowserModule;
let RouterModule = window.angular.router.RouterModule;
let APP_BASE_HREF = window.angular.common.APP_BASE_HREF;
import {PVWAApp} from './pvwa.component';
import {SafesComponent} from './safes.component';
import {AccountsComponent} from './accounts.component';



export function MyAwesomeMatcher ( url: any ): any {

debugger;
  if (url.length === 0) {
    return null;
  }

  //const reg = /^(awesome-path)$/;
  const reg = /^(.*safes)$/;
  const param = url[ 0 ].toString();
 
  if (param.match( reg )) {
    // myValue: "awesome-path"
    return ({ consumed: url, posParams: { myValue: url[ 0 ] } });
  }

  return null;

}


const appRoutes: any = [
  {path: 'pvwa', children: [
    {path: 'safes', component: SafesComponent},
    { path: 'accounts', component: AccountsComponent } 
  ]},
  {path: '**', component: AccountsComponent }
]
  
  // /*
  // { matcher: MyAwesomeMatcher, component: SafesComponent },
  // //{ path: '#/pvwa/safes',    component: SafesComponent },
  //   { path: '**', component: AccountsComponent } 
  // /*{ path: '',
  // children: [    
  // ]    
  // } */ 



@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false,  useHash: true } // <-- debugging purposes only
    ),
    BrowserModule],
  declarations: [PVWAApp, SafesComponent, AccountsComponent],
  //providers: [{provide: APP_BASE_HREF, useValue : '/#/pvwa' }],
  bootstrap: [PVWAApp]
})
export default class MainModule {
}
