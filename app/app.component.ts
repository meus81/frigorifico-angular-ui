import { Component } from 'angular2/core';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {LoginFormComponent} from './login-form.component';
import {LoginServices} from './login.services';

import {TropaFormComponent } from './tropa-form.component';
import {TropaServices} from './tropa.services';

@Component({
  selector: 'frigorifico-component',
  template: `
    <h1>{{title}}</h1>
        <nav>
            <a [routerLink]="['CargarTropa']">Cargar Tropa</a>
        </nav>
    <router-outlet></router-outlet>  `,
  directives: [ROUTER_DIRECTIVES, LoginFormComponent, TropaFormComponent],
  providers: [
    HTTP_PROVIDERS,
    TropaServices,
    LoginServices
  ]
})
@RouteConfig([
  {path:'/nueva_tropa', name:'CargarTropa', component: TropaFormComponent},
])
    
export class AppComponent {
    title = 'Capiangos';
}