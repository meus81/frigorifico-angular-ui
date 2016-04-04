import {CORE_DIRECTIVES } from 'angular2/common';
import {HTTP_BINDINGS} from 'angular2/http';
import {Component} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import {LoginServices} from './login.services';
import {Usuario} from './usuario';


@Component({
    selector: 'login-form',    
    templateUrl: 'app/login-form.component.html',
    providers: [LoginServices, HTTP_BINDINGS],
    directives: [CORE_DIRECTIVES]
})

export class LoginFormComponent{
    
    errorMessage: string;
    submitted = false;
    active = true;
    usuario = new Usuario();
    
    constructor(
        private _loginServices: LoginServices
    ) { }

    limpiar(){
        this.usuario= new Usuario();
        this.active= false;
        setTimeout(()=> this.active=true, 0);
    }
    
    onSubmit() { 
        this.submitted = true;
        console.log("voy a invocar al post del login...");
        this._loginServices.login(this.usuario)
                            .subscribe(
                                usuario  => this.actualizarUsuario(usuario),
                                error =>  this.errorMessage = <any>error,
                                () => console.log('Logueo de usuario completado')
        );
    
    }
    
    actualizarUsuario(u){
        console.log("imprimo el usuario recibido");
        console.log(u);
        this.usuario.idUsuario = u.idUsuario;
        this.usuario.nombre = u.numeroTropa;
        this.usuario.contrasenia = u.contrasenia;
    } 
    
    // TODO: Remove this when we're done
    get login_diagnostic() { 
        return JSON.stringify(this.usuario); 
    }       
}    