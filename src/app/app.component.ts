import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Shell works!</h1>
    <section class="nav">
          <a href="#/pvwa">PVWA</a>
          <a href="#/pta">PTA</a>
          <a href="#/msp">MSP</a>
          <a href="#/daniel-child">ChildApp</a>
      </section>
      <hr>    
    `,  
})
export class AppComponent {
}
