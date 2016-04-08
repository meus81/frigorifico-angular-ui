System.register(['angular2/platform/browser', 'angular2/http', 'angular2/router', 'rxjs/Rx', './app.component', './app.constants'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, http_1, router_1, app_component_1, app_constants_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (_1) {},
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (app_constants_1_1) {
                app_constants_1 = app_constants_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [http_1.HTTP_PROVIDERS, http_1.HTTP_BINDINGS, router_1.ROUTER_PROVIDERS, app_constants_1.Configuration]);
        }
    }
});
//# sourceMappingURL=main.js.map