System.register(['angular2/core', 'angular2/router', './is-loggedin'], function(exports_1, context_1) {
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
    var core_1, router_1, router_2, is_loggedin_1;
    var HomeFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (is_loggedin_1_1) {
                is_loggedin_1 = is_loggedin_1_1;
            }],
        execute: function() {
            HomeFormComponent = (function () {
                function HomeFormComponent() {
                    this.title = 'Capiangos';
                }
                HomeFormComponent = __decorate([
                    core_1.Component({
                        selector: 'home-form',
                        templateUrl: 'app/home-form.component.html',
                        providers: [router_1.ROUTER_DIRECTIVES],
                        directives: [router_2.RouterLink]
                    }),
                    router_2.CanActivate(function () { return is_loggedin_1.isLoggedin(); }), 
                    __metadata('design:paramtypes', [])
                ], HomeFormComponent);
                return HomeFormComponent;
            }());
            exports_1("HomeFormComponent", HomeFormComponent);
        }
    }
});
//# sourceMappingURL=home-form.component.js.map