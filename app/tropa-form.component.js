System.register(['angular2/core', './tropa'], function(exports_1, context_1) {
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
    var core_1, tropa_1;
    var TropaFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tropa_1_1) {
                tropa_1 = tropa_1_1;
            }],
        execute: function() {
            TropaFormComponent = (function () {
                function TropaFormComponent() {
                    this.especies = ['Ovino', 'Porcino', 'Vacuno'];
                    this.model = new tropa_1.Tropa(100, '2016-02-23 12:02:30.000', 43, 1);
                    this.submitted = false;
                }
                TropaFormComponent.prototype.onSubmit = function () {
                    this.submitted = true;
                };
                Object.defineProperty(TropaFormComponent.prototype, "diagnostic", {
                    // TODO: Remove this when we're done
                    get: function () {
                        return JSON.stringify(this.model);
                    },
                    enumerable: true,
                    configurable: true
                });
                TropaFormComponent = __decorate([
                    core_1.Component({
                        selector: 'tropa-form',
                        templateUrl: 'app/tropa-from.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], TropaFormComponent);
                return TropaFormComponent;
            }());
            exports_1("TropaFormComponent", TropaFormComponent);
        }
    }
});
//# sourceMappingURL=tropa-form.component.js.map