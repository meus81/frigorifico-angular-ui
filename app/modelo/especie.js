System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Especie;
    return {
        setters:[],
        execute: function() {
            Especie = (function () {
                function Especie(idEspecie, codigo, descripcion) {
                    this.idEspecie = idEspecie;
                    this.codigo = codigo;
                    this.descripcion = descripcion;
                }
                return Especie;
            }());
            exports_1("Especie", Especie);
        }
    }
});
//# sourceMappingURL=especie.js.map