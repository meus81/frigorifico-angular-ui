import {Component} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import { CORE_DIRECTIVES } from 'angular2/common';
import {Tropa} from './tropa';
import {TropaServices} from './tropa.services';

@Component({
    selector: 'tropa-form',    
    templateUrl: 'app/tropa-from.component.html',
    providers: [TropaServices],
    directives: [CORE_DIRECTIVES]
})

export class TropaFormComponent{
    especies = [1, 2, 3];
    submitted = false;
    active = true;
    tropa = new Tropa(1, '2016-02-23 12:02:30.000', 43, 1);
    
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
        console.log(this._tropaServices.addTropa(this.tropa));
    }
    
    // TODO: Remove this when we're done
    get diagnostic() { 
        return JSON.stringify(this.tropa); 
    }       
}    