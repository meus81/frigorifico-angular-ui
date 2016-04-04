import {bootstrap}    from 'angular2/platform/browser';
import {HTTP_PROVIDERS, HTTP_BINDINGS} from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';
import 'rxjs/Rx';
import {AppComponent} from './app.component';
import {Configuration} from './app.constants';

bootstrap(AppComponent, [HTTP_PROVIDERS, HTTP_BINDINGS, ROUTER_PROVIDERS, Configuration]);