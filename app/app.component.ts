import { Component } from 'angular2/core';
import {HTTP_PROVIDERS}    from 'angular2/http';

import {LoginFormComponent} from './login-form.component';
import {LoginServices} from './login.services';

import {TropaFormComponent } from './tropa-form.component';
import {TropaServices} from './tropa.services';

@Component({
  selector: 'frigorifico-component',
  template: `
    <h1>{{title}}</h1>
    <login-form></login-form>
  `,
  directives: [LoginFormComponent, TropaFormComponent],
  providers: [
    HTTP_PROVIDERS,
    TropaServices,
    LoginServices
  ]
})

export class AppComponent {
    title = 'Capiangos';
    
//    `
//    <h1>{{title}}</h1>
//    <tropa-form></tropa-form>
//  `,
}
