import {CORE_DIRECTIVES } from 'angular2/common';
import {HTTP_BINDINGS} from 'angular2/http';
import {Component} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES}   from 'angular2/router';
import {NgForm, FormBuilder, ControlGroup, Validators} from 'angular2/common';
import {LoginServices} from './login.services';
import {Usuario} from './usuario';

@Component({
    selector: 'login-form',    
    templateUrl: 'app/login-form.component.html',
    providers: [LoginServices, HTTP_BINDINGS],
    directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES]
})

export class LoginFormComponent{
	form: ControlGroup;
	error: boolean = false;
	errorMessage: string;
	usuario = new Usuario();

	constructor(fb: FormBuilder, 
    		    private _loginServices: LoginServices, 
    		    private _router: Router) {
    	
    	this.form = fb.group({
    	    nombre:  ['', Validators.required],
    	    contrasenia:  ['', Validators.required]
    	  });
    }
 
    limpiar(){
        this.usuario= new Usuario();
        //setTimeout(()=> this.active=true, 0);
    }
    
    onSubmit() { 
        console.log("voy a invocar al post del login...");
        this._loginServices.login(this.usuario)
                            .subscribe(
                                usuario  => this.actualizarUsuario(usuario),
                                error =>  this.errorMessage = <any>error,
                                () => console.log('Logueo de usuario completado')
        );
        console.log("vot a ejecutar el redirect")
        this._router.navigate( ['Inicio'] );
    }
    
    actualizarUsuario(u){
        console.log("imprimo el usuario recibido");
        console.log(u);
        this.usuario.idUsuario = u.idUsuario;
        this.usuario.nombre = u.numeroTropa;
        this.usuario.contrasenia = u.contrasenia;
    } 
    
    
    onLogout() {
        this._loginServices.logout()
					       .subscribe(
					            () => this._router.navigate(['Login'])
					       );
      }
    
    // TODO: Remove this when we're done
    get login_diagnostic() { 
        return JSON.stringify(this.usuario); 
    }       
}    