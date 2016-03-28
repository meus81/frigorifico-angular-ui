System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Tropa;
    return {
        setters:[],
        execute: function() {
            /*
            * http://usejsdoc.org/
            */
            Tropa = (function () {
                function Tropa(numeroTropa, fechaIngreso, animalesRecibidos, especie) {
                    this.numeroTropa = numeroTropa;
                    this.fechaIngreso = fechaIngreso;
                    this.animalesRecibidos = animalesRecibidos;
                    this.especie = especie;
                }
                return Tropa;
            }());
            exports_1("Tropa", Tropa);
        }
    }
});
//# sourceMappingURL=tropa.js.map