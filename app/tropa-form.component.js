System.register(['angular2/common', 'angular2/http', 'angular2/core', 'angular2/router', './modelo/tropa', './tropa.services', './especie.services'], function(exports_1, context_1) {
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
    var common_1, http_1, core_1, router_1, tropa_1, tropa_services_1, especie_services_1;
    var TropaFormComponent;
    return {
        setters:[
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (tropa_1_1) {
                tropa_1 = tropa_1_1;
            },
            function (tropa_services_1_1) {
                tropa_services_1 = tropa_services_1_1;
            },
            function (especie_services_1_1) {
                especie_services_1 = especie_services_1_1;
            }],
        execute: function() {
            TropaFormComponent = (function () {
                function TropaFormComponent(_tropaServices, _especieServices) {
                    this._tropaServices = _tropaServices;
                    this._especieServices = _especieServices;
                    this.especies = [];
                    this.submitted = false;
                    this.active = true;
                    this.tropa = new tropa_1.Tropa(null, 1, '2016-02-23 12:02:30.000', 43, 1);
                }
                TropaFormComponent.prototype.newTropa = function () {
                    var _this = this;
                    this.tropa = new tropa_1.Tropa();
                    this.active = false;
                    setTimeout(function () { return _this.active = true; }, 0);
                };
                TropaFormComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    console.log("voy a hacer la consulta de especies");
                    this._especieServices.getEspecies()
                        .subscribe(function (esp) { return _this.especies = esp; });
                    console.log(this.especies);
                    console.log("despues de la consulta de especies");
                };
                TropaFormComponent.prototype.onSubmit = function () {
                    var _this = this;
                    this.submitted = true;
                    console.log("voy a invocar al post de guardar tropa...");
                    //console.log(this._tropaServices.addTropa(this.tropa));
                    this._tropaServices.addTropa(this.tropa)
                        .subscribe(function (t) { return _this.actualizarTropa(t); }, function (error) { return _this.errorMessage = error; }, function () { return console.log('Tropa saved Complete'); });
                };
                TropaFormComponent.prototype.actualizarTropa = function (t) {
                    console.log("imprimo la tropa recibida");
                    this.tropa.idTropa = t.idTropa;
                    this.tropa.numeroTropa = t.numeroTropa;
                    this.tropa.fechaIngreso = t.fechaIngreso;
                    this.tropa.animalesRecibidos = t.animalesRecibidos;
                    this.tropa.especieId = t.especieId;
                };
                Object.defineProperty(TropaFormComponent.prototype, "diagnostic", {
                    // TODO: Remove this when we're done
                    get: function () {
                        return JSON.stringify(this.tropa);
                    },
                    enumerable: true,
                    configurable: true
                });
                TropaFormComponent = __decorate([
                    core_1.Component({
                        selector: 'tropa-form',
                        templateUrl: 'app/tropa-form.component.html',
                        providers: [tropa_services_1.TropaServices, especie_services_1.EspecieServices, http_1.HTTP_BINDINGS],
                        directives: [common_1.CORE_DIRECTIVES, router_1.RouterLink]
                    }), 
                    __metadata('design:paramtypes', [tropa_services_1.TropaServices, especie_services_1.EspecieServices])
                ], TropaFormComponent);
                return TropaFormComponent;
            }());
            exports_1("TropaFormComponent", TropaFormComponent);
        }
    }
});
//# sourceMappingURL=tropa-form.component.js.map