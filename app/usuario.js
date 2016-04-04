System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Usuario;
    return {
        setters:[],
        execute: function() {
            Usuario = (function () {
                function Usuario(idUsuario, nombre, contrasenia) {
                    this.idUsuario = idUsuario;
                    this.nombre = nombre;
                    this.contrasenia = contrasenia;
                }
                return Usuario;
            }());
            exports_1("Usuario", Usuario);
        }
    }
});
//# sourceMappingURL=usuario.js.map