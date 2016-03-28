System.register(['angular2/core', 'angular2/http', './tropa', 'rxjs/Rx'], function(exports_1, context_1) {
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
    var core_1, http_1, tropa_1;
    var default_1;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (tropa_1_1) {
                tropa_1 = tropa_1_1;
            },
            function (_1) {}],
        execute: function() {
            default_1 = (function () {
                function default_1() {
                }
                default_1 = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], default_1);
                return default_1;
            }());
            TropaServices;
            {
                constructor(private, http, Http);
                {
                }
                addTropa(tropa, tropa_1.Tropa);
                Observable < tropa_1.Tropa > {
                    let: body = JSON.stringify({ tropa: tropa }),
                    let: headers = new http_1.Headers({ 'Content-Type': 'application/json' }),
                    let: options = new http_1.RequestOptions({ headers: headers }),
                    return: this.http.post('http://localhost:8080/frigorifico/rest/nueva_tropa', body, options)
                        .map(function (res) { return res.json().data; })
                        .catch(this.handleError)
                };
                handleError(error, Response);
                {
                    // in a real world app, we may send the error to some remote logging infrastructure
                    // instead of just logging it to the console
                    console.error(error);
                    return Observable.throw(error.json().error || 'Server error');
                }
            }
        }
    }
});
//# sourceMappingURL=tropa.services.js.map