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
    var TropaServices;
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
            //import * as Rx from "rxjs/Rx"
            TropaServices = (function () {
                function TropaServices(_http, _configuration) {
                    var _this = this;
                    this._http = _http;
                    this._configuration = _configuration;
                    this.addTropa = function (tropa) {
                        console.log("voy a enviar esta tropa");
                        console.log(tropa);
                        var body = JSON.stringify({ tropa: tropa });
                        console.log(body);
                        var options = new http_1.RequestOptions({ headers: _this.headers });
                        return _this._http.post(_this.actionUrl, body, options)
                            .map(function (res) { return tropa = res.json().data; })
                            .do(function (data) { return console.log('server data:', data); }) // debug
                            .catch(_this.handleError);
                    };
                    this.actionUrl = _configuration.ServerWithApiUrl + 'nueva_tropa';
                    console.log(this.actionUrl);
                    this.headers = new http_1.Headers();
                    this.headers.append('Content-Type', 'application/json');
                    this.headers.append('Accept', 'application/json');
                }
                TropaServices.prototype.handleError = function (error) {
                    // in a real world app, we may send the error to some remote logging infrastructure
                    // instead of just logging it to the console
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                TropaServices = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, app_constants_1.Configuration])
                ], TropaServices);
                return TropaServices;
            }());
            exports_1("TropaServices", TropaServices);
        }
    }
});
//# sourceMappingURL=tropa.services.js.map