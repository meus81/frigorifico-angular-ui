import { Component } from 'angular2/core';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'home-form',    
    templateUrl: 'app/home-form.component.html',
    providers: [ROUTER_DIRECTIVES],
    directives: [HTTP_PROVIDERS]
})

export class HomeFormComponent{
	title = 'Capiangos'
}