import {Component} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import { CORE_DIRECTIVES } from 'angular2/common';
import {HTTP_BINDINGS} from 'angular2/http';
import {Tropa} from './tropa';
import {TropaServices} from './tropa.services';

@Component({
    selector: 'tropa-form',    
    templateUrl: 'app/tropa-from.component.html',
    providers: [TropaServices, HTTP_BINDINGS],
    directives: [CORE_DIRECTIVES]
})

export class TropaFormComponent{
    errorMessage: string;
    especies = [1, 2, 3];
    submitted = false;
    active = true;
    tropa = new Tropa(null, 1, '2016-02-23 12:02:30.000', 43, 1);
    
    constructor(
        private _tropaServices: TropaServices
    ) { }

    newTropa(){
        this.tropa= new Tropa();
        this.active= false;
        setTimeout(()=> this.active=true, 0);
    }
    
    onSubmit() { 
        this.submitted = true;
        console.log("voy a invocar al post...");
        //console.log(this._tropaServices.addTropa(this.tropa));
        this._tropaServices.addTropa(this.tropa)
                            .subscribe(
                                t  => this.actualizarTropa(t),
                                error =>  this.errorMessage = <any>error,
                                () => console.log('Tropa saved Complete')
        );
    }
    
    
//    this.http.post('http://localhost:3001/sessions/create', creds, {
//    headers: headers
//    })
//    .map(res => res.json())
//    .subscribe(
//      data => this.saveJwt(data.id_token),
//      err => this.logError(err),
//      () => console.log('Authentication Complete')
//    );

    actualizarTropa(t){
        console.log("imprimo la tropa recibida");
        this.tropa.idTropa = t.idTropa;
        this.tropa.numeroTropa = t.numeroTropa;
        this.tropa.fechaIngreso = t.fechaIngreso;
        this.tropa.animalesRecibidos = t.animalesRecibidos;
        this.tropa.especieId = t.especieId
    } 
    
    // TODO: Remove this when we're done
    get diagnostic() { 
        return JSON.stringify(this.tropa); 
    }       
}    