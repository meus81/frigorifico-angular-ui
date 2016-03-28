import { Component } from 'angular2/core';
import { TropaFormComponent } from './tropa-form.component'

@Component({
  selector: 'frigorifico-component',
  template: `
    <h1>{{title}}</h1>
    <tropa-form></tropa-form>
  `,
  directives: [TropaFormComponent]
})

export class AppComponent {
  title = 'Frigorífico';
}
