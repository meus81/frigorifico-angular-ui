import {CORE_DIRECTIVES } from 'angular2/common';
import {HTTP_BINDINGS} from 'angular2/http';
import {Component} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import {OnInit} from 'angular2/core';
import { RouterLink } from 'angular2/router'
import {Tropa} from './modelo/tropa';
import {TropaServices} from './tropa.services';
import {Especie} from './modelo/especie'
import {EspecieServices} from './especie.services'

@Component({
    selector: 'tropa-form',    
    templateUrl: 'app/tropa-form.component.html',
    providers: [TropaServices, EspecieServices, HTTP_BINDINGS],
    directives: [CORE_DIRECTIVES, RouterLink]
})

export class TropaFormComponent implements OnInit{
    errorMessage: string;
    especies = [];
    submitted = false;
    active = true;
    tropa = new Tropa(null, 1, '2016-02-23 12:02:30.000', 43, 1);
    
    constructor(
        private _tropaServices: TropaServices,
        private _especieServices: EspecieServices
    ) { }

    newTropa(){
        this.tropa= new Tropa();
        this.active= false;
        setTimeout(()=> this.active=true, 0);
    }
    
    ngOnInit(){
        console.log("voy a hacer la consulta de especies");
        this._especieServices.getEspecies()
                             .subscribe(esp => this.especies = esp);
        console.log(this.especies);
        console.log("despues de la consulta de especies");
    }
    
    onSubmit() { 
        this.submitted = true;
        console.log("voy a invocar al post de guardar tropa...");
        //console.log(this._tropaServices.addTropa(this.tropa));
        this._tropaServices.addTropa(this.tropa)
                            .subscribe(
                                t  => this.actualizarTropa(t),
                                error =>  this.errorMessage = <any>error,
                                () => console.log('Tropa saved Complete')
        );
    }

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