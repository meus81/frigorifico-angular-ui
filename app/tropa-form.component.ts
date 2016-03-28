import {Component} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import {Tropa} from './tropa';

@Component({
    selector: 'tropa-form',    
    templateUrl: 'app/tropa-from.component.html'
})

export class TropaFormComponent{
    especies = ['Ovino', 'Porcino', 'Vacuno'];
    
    model = new Tropa(100, '2016-02-23 12:02:30.000', 43, 1);
    
    submitted = false;
    
    onSubmit() { 
        this.submitted = true;
    }
    
    // TODO: Remove this when we're done
    get diagnostic() { 
        return JSON.stringify(this.model); 
    }       
}    