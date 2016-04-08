System.register(['angular2/core', 'angular2/http', 'rxjs/Observable', 'rxjs/add/operator/map', 'rxjs/add/operator/do', 'rxjs/add/operator/catch', './app.constants'], function(exports_1, context_1) {
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
    var core_1, http_1, Observable_1, app_constants_1;
    var EspecieServices;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (app_constants_1_1) {
                app_constants_1 = app_constants_1_1;
            }],
        execute: function() {
            EspecieServices = (function () {
                function EspecieServices(_http, _configuration) {
                    this._http = _http;
                    this._configuration = _configuration;
                    this.actionUrl = _configuration.ServerWithApiUrl + 'especies';
                    console.log(this.actionUrl);
                }
                EspecieServices.prototype.getEspecies = function () {
                    return this._http.get(this.actionUrl)
                        .map(function (res) { return res.json(); })
                        .do(function (data) { return console.log('server data:', data); }) // debug
                        .catch(this.handleError);
                };
                EspecieServices.prototype.handleError = function (error) {
                    // in a real world app, we may send the error to some remote logging infrastructure
                    // instead of just logging it to the console
                    console.error("estoy logueando un error?");
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                EspecieServices = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, app_constants_1.Configuration])
                ], EspecieServices);
                return EspecieServices;
            }());
            exports_1("EspecieServices", EspecieServices);
        }
    }
});
//# sourceMappingURL=especie.services.js.map