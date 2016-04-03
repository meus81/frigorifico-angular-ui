import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {HTTP_PROVIDERS, HTTP_BINDINGS} from 'angular2/http';
import 'rxjs/Rx';
import {TropaServices} from './tropa.services';
import {Configuration} from './app.constants';

bootstrap(AppComponent, [HTTP_PROVIDERS, HTTP_BINDINGS, Configuration, TropaServices]);