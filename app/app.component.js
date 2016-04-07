System.register(['angular2/core', 'angular2/http', 'angular2/router', './login-form.component', './login.services', './tropa-form.component', './tropa.services', './home-form.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, router_1, login_form_component_1, login_services_1, tropa_form_component_1, tropa_services_1, home_form_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (login_form_component_1_1) {
                login_form_component_1 = login_form_component_1_1;
            },
            function (login_services_1_1) {
                login_services_1 = login_services_1_1;
            },
            function (tropa_form_component_1_1) {
                tropa_form_component_1 = tropa_form_component_1_1;
            },
            function (tropa_services_1_1) {
                tropa_services_1 = tropa_services_1_1;
            },
            function (home_form_component_1_1) {
                home_form_component_1 = home_form_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Capiangos';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'frigorifico-component',
                        template: "\n    <h1>{{title}}</h1>\n    <router-outlet></router-outlet>\n  ",
                        directives: [router_1.ROUTER_DIRECTIVES, login_form_component_1.LoginFormComponent, tropa_form_component_1.TropaFormComponent, home_form_component_1.HomeFormComponent],
                        providers: [
                            http_1.HTTP_PROVIDERS,
                            tropa_services_1.TropaServices,
                            login_services_1.LoginServices
                        ]
                    }),
                    router_1.RouteConfig([
                        { path: '/login', name: 'Login', component: login_form_component_1.LoginFormComponent, useAsDefault: true },
                        { path: '/home', name: 'Inicio', component: home_form_component_1.HomeFormComponent },
                        { path: '/cargarTropa', name: 'CargarTropa', component: tropa_form_component_1.TropaFormComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map