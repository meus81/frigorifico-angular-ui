import {Component} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import {Tropa} from './tropa';
import {TropaServices} from './tropa-services';

@Component({
    selector: 'tropa-form',    
    templateUrl: 'app/tropa-from.component.html'
})

export class TropaFormComponent{
    especies = ['Ovino', 'Porcino', 'Vacuno'];
    submitted = false;
    active = true;
    model = new Tropa(100, '2016-02-23 12:02:30.000', 43, 1);
    
    constructor(
        private _tropaServices: TropaServices
    ) { }

    newTropa(){
        this.model = new Tropa();
        this.active= false;
        setTimeout(()=> this.active=true, 0);
    }
    
    onSubmit() { 
        this.submitted = true;
        this._tropaServices.addTropa(this.model);
        
    }
    
    // TODO: Remove this when we're done
    get diagnostic() { 
        return JSON.stringify(this.model); 
    }       
}    