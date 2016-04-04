System.register(['angular2/common', 'angular2/http', 'angular2/core', './login.services', './usuario'], function(exports_1, context_1) {
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
    var common_1, http_1, core_1, login_services_1, usuario_1;
    var LoginFormComponent;
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
            function (login_services_1_1) {
                login_services_1 = login_services_1_1;
            },
            function (usuario_1_1) {
                usuario_1 = usuario_1_1;
            }],
        execute: function() {
            LoginFormComponent = (function () {
                function LoginFormComponent(_loginServices) {
                    this._loginServices = _loginServices;
                    this.submitted = false;
                    this.active = true;
                    this.usuario = new usuario_1.Usuario();
                }
                LoginFormComponent.prototype.limpiar = function () {
                    var _this = this;
                    this.usuario = new usuario_1.Usuario();
                    this.active = false;
                    setTimeout(function () { return _this.active = true; }, 0);
                };
                LoginFormComponent.prototype.onSubmit = function () {
                    var _this = this;
                    this.submitted = true;
                    console.log("voy a invocar al post del login...");
                    this._loginServices.login(this.usuario)
                        .subscribe(function (usuario) { return _this.actualizarUsuario(usuario); }, function (error) { return _this.errorMessage = error; }, function () { return console.log('Logueo de usuario completado'); });
                };
                LoginFormComponent.prototype.actualizarUsuario = function (u) {
                    console.log("imprimo el usuario recibido");
                    console.log(u);
                    this.usuario.idUsuario = u.idUsuario;
                    this.usuario.nombre = u.numeroTropa;
                    this.usuario.contrasenia = u.contrasenia;
                };
                Object.defineProperty(LoginFormComponent.prototype, "login_diagnostic", {
                    // TODO: Remove this when we're done
                    get: function () {
                        return JSON.stringify(this.usuario);
                    },
                    enumerable: true,
                    configurable: true
                });
                LoginFormComponent = __decorate([
                    core_1.Component({
                        selector: 'login-form',
                        templateUrl: 'app/login-form.component.html',
                        providers: [login_services_1.LoginServices, http_1.HTTP_BINDINGS],
                        directives: [common_1.CORE_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [login_services_1.LoginServices])
                ], LoginFormComponent);
                return LoginFormComponent;
            }());
            exports_1("LoginFormComponent", LoginFormComponent);
        }
    }
});
//# sourceMappingURL=login-form.component.js.map