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
    var LoginServices;
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
            LoginServices = (function () {
                function LoginServices(_http, _configuration) {
                    this._http = _http;
                    this._configuration = _configuration;
                    this.token = localStorage.getItem('token');
                    this.actionUrl = _configuration.ServerWithApiUrl + 'login';
                    console.log(this.actionUrl);
                    this.headers = new http_1.Headers();
                    this.headers.append('Content-Type', 'application/json');
                    this.headers.append('Accept', 'application/json');
                    this.headers.append('Access-Control-Allow-Origin', '*');
                    this.headers.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
                    this.headers.append('Access-Control-Allow-Headers', 'Accept, Accept-CH, Accept-Charset, Accept-Datetime, Accept-Encoding, Accept-Ext, Accept-Features, Accept-Language, Accept-Params, Accept-Ranges, Access-Control-Allow-Credentials, Access-Control-Allow-Headers, Access-Control-Allow-Methods, Access-Control-Allow-Origin, Access-Control-Expose-Headers, Access-Control-Max-Age, Access-Control-Request-Headers, Access-Control-Request-Method, Age, Allow, Alternates, Authentication-Info, Authorization, C-Ext, C-Man, C-Opt, C-PEP, C-PEP-Info, CONNECT, Cache-Control, Compliance, Connection, Content-Base, Content-Disposition, Content-Encoding, Content-ID, Content-Language, Content-Length, Content-Location, Content-MD5, Content-Range, Content-Script-Type, Content-Security-Policy, Content-Style-Type, Content-Transfer-Encoding, Content-Type, Content-Version, Cookie, Cost, DAV, DELETE, DNT, DPR, Date, Default-Style, Delta-Base, Depth, Derived-From, Destination, Differential-ID, Digest, ETag, Expect, Expires, Ext, From, GET, GetProfile, HEAD, HTTP-date, Host, IM, If, If-Match, If-Modified-Since, If-None-Match, If-Range, If-Unmodified-Since, Keep-Alive, Label, Last-Event-ID, Last-Modified, Link, Location, Lock-Token, MIME-Version, Man, Max-Forwards, Media-Range, Message-ID, Meter, Negotiate, Non-Compliance, OPTION, OPTIONS, OWS, Opt, Optional, Ordering-Type, Origin, Overwrite, P3P, PEP, PICS-Label, POST, PUT, Pep-Info, Permanent, Position, Pragma, ProfileObject, Protocol, Protocol-Query, Protocol-Request, Proxy-Authenticate, Proxy-Authentication-Info, Proxy-Authorization, Proxy-Features, Proxy-Instruction, Public, RWS, Range, Referer, Refresh, Resolution-Hint, Resolver-Location, Retry-After, Safe, Sec-Websocket-Extensions, Sec-Websocket-Key, Sec-Websocket-Origin, Sec-Websocket-Protocol, Sec-Websocket-Version, Security-Scheme, Server, Set-Cookie, Set-Cookie2, SetProfile, SoapAction, Status, Status-URI, Strict-Transport-Security, SubOK, Subst, Surrogate-Capability, Surrogate-Control, TCN, TE, TRACE, Timeout, Title, Trailer, Transfer-Encoding, UA-Color, UA-Media, UA-Pixels, UA-Resolution, UA-Windowpixels, URI, Upgrade, User-Agent, Variant-Vary, Vary, Version, Via, Viewport-Width, WWW-Authenticate, Want-Digest, Warning, Width, X-Content-Duration, X-Content-Security-Policy, X-Content-Type-Options, X-CustomHeader, X-DNSPrefetch-Control, X-Forwarded-For, X-Forwarded-Port, X-Forwarded-Proto, X-Frame-Options, X-Modified, X-OTHER, X-PING, X-PINGOTHER, X-Powered-By, X-Requested-With'); //'X-Requested-With,content-type');
                    this.headers.append('Access-Control-Allow-Credentials', "true");
                }
                LoginServices.prototype.login = function (usuario) {
                    //    	if (username === 'test' && password === 'test') {
                    //    	      this.token = 'token';
                    //    	      localStorage.setItem('token', this.token);
                    //    	      return Observable.of('token');
                    //    	    }
                    var _this = this;
                    console.log("voy a enviar login con nombre y contrasenia");
                    var body = JSON.stringify({ "nombre": usuario.nombre,
                        "contrasenia": usuario.contrasenia
                    });
                    console.log(body);
                    var options = new http_1.RequestOptions({ headers: this.headers });
                    console.log(options);
                    return this._http.post(this.actionUrl, body, options)
                        .map(function (res) { _this.token = 'token'; localStorage.setItem('token', _this.token); return res.json(); })
                        .do(function (data) { return console.log('server data:', data); }) // debug
                        .catch(this.handleError);
                };
                LoginServices.prototype.logout = function () {
                    /*
                     * If we had a login api, we would have done something like this
            
                    return this.http.get(this.config.serverUrl + '/auth/logout', {
                      headers: new Headers({
                        'x-security-token': this.token
                      })
                    })
                    .map((res : any) => {
                      this.token = undefined;
                      localStorage.removeItem('token');
                    });
                     */
                    this.token = undefined;
                    localStorage.removeItem('token');
                    return Observable_1.Observable.of(true);
                };
                LoginServices.prototype.handleError = function (error) {
                    // in a real world app, we may send the error to some remote logging infrastructure
                    // instead of just logging it to the console
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                LoginServices = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, app_constants_1.Configuration])
                ], LoginServices);
                return LoginServices;
            }());
            exports_1("LoginServices", LoginServices);
        }
    }
});
//# sourceMappingURL=login.services.js.map