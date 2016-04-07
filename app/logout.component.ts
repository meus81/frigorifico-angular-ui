import {Component} from 'angular2/core';
import {RouterLink, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {LoginServices}  from './login.services';

@Component({
    selector: 'logout-form',    
    templateUrl: '',
    providers: [ROUTER_DIRECTIVES, LoginServices],
    directives: [RouterLink]
})


export class LogoutComponent{

    constructor(private _loginServices: LoginServices, 
                private _router: Router) {}

    
    logout(){
        this._loginServices.logout()
                           .subscribe(() => console.log('Deslogueo de usuario completado'));
        this._router.navigate(['Login']);
    }
}