import { Component } from 'angular2/core';
import {HTTP_PROVIDERS}    from 'angular2/http';
import { TropaFormComponent } from './tropa-form.component'
import {TropaServices} from './tropa.services';

@Component({
  selector: 'frigorifico-component',
  template: `
    <h1>{{title}}</h1>
    <tropa-form></tropa-form>
  `,
  directives: [TropaFormComponent],
  providers: [
    HTTP_PROVIDERS,
    TropaServices,
  ]
})

export class AppComponent {
    title = 'Frigorífico';
}
