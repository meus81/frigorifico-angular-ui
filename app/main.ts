import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {HTTP_PROVIDERS} from 'angular2/http';
import {TropaServices} from './tropa.services';
import {Configuration} from './app.constants';

bootstrap(AppComponent, [HTTP_PROVIDERS, Configuration, TropaServices]);