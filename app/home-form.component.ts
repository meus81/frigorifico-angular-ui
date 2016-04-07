import { Component } from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import { RouterLink, CanActivate} from 'angular2/router'
import {isLoggedin}  from './is-loggedin';

@Component({
    selector: 'home-form',    
    templateUrl: 'app/home-form.component.html',
    providers: [ROUTER_DIRECTIVES],
    directives: [RouterLink]
})


@CanActivate(() => isLoggedin())
export class HomeFormComponent{
	title = 'Capiangos'
}