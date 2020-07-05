import { __decorate } from 'tslib';
import { ɵɵdefineInjectable, Injectable, EventEmitter, Output, Input, Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

var RutService = /** @class */ (function () {
    function RutService() {
    }
    RutService.prototype.rutFormat = function (value) {
        var rut = this.rutClean(value);
        if (rut.length <= 1) {
            return;
        }
        var result = rut.slice(-4, -1) + "-" + rut.substr(rut.length - 1);
        for (var i = 4; i < rut.length; i += 3) {
            result = rut.slice(-3 - i, -i) + "." + result;
        }
        return result;
    };
    RutService.prototype.rutClean = function (value) {
        return typeof value === 'string' ? value.replace(/[^0-9kK]+/g, '').toUpperCase() : '';
    };
    RutService.prototype.validaRUT = function (rut) {
        var valor = rut;
        valor = this.rutClean(valor);
        // Aislar Cuerpo y Dígito Verificador
        var cuerpo = valor.slice(0, -1);
        var dv = valor.slice(-1).toUpperCase();
        // Si no cumple con el mínimo ej. (n.nnn.nnn)
        if (cuerpo.length < 7 && cuerpo.length >= 0) {
            return true;
        }
        // Calcular Dígito Verificador
        var suma = 0;
        var multiplo = 2;
        // Para cada dígito del Cuerpo
        for (var i = 1; i <= cuerpo.length; i++) {
            // Obtener su Producto con el Múltiplo Correspondiente
            var index = multiplo * Number(valor.charAt(cuerpo.length - i));
            // Sumar al Contador General
            suma = suma + index;
            // Consolidar Múltiplo dentro del rango [2,7]
            if (multiplo < 7) {
                multiplo = multiplo + 1;
            }
            else {
                multiplo = 2;
            }
        }
        // Calcular Dígito Verificador en base al Módulo 11
        var dvEsperado = 11 - (suma % 11);
        // Casos Especiales (0 y K)
        dv = dv === 'K' ? '10' : dv;
        dv = dv === '0' ? '11' : dv;
        // Validar que el Cuerpo coincide con su Dígito Verificador
        if (dvEsperado.toString() !== dv && cuerpo.length >= 0) {
            return true;
        }
        else {
            return false;
        }
    };
    RutService.prototype.getRutChile = function (mode, rut) {
        if (!this.validaRUT(rut)) {
            switch (mode) {
                // el rut limpio 184215551
                case 0:
                    return this.rutClean(rut);
                // solo el cuerpo del rut  18421555
                case 1:
                    var valor = rut;
                    valor = this.rutClean(valor);
                    var cuerpo = valor.slice(0, -1);
                    return cuerpo;
                // rut formateado 18.421.555-1
                case 2:
                    return this.rutFormat(rut);
                // rut cuerpo - digitov : 18421555-1  
                case 3:
                    var r = rut;
                    r = this.rutClean(r);
                    var c = r.slice(0, -1);
                    var dv = r.slice(-1).toUpperCase();
                    return c + '-' + dv;
                case 4:
                    var ru = rut;
                    ru = this.rutClean(ru);
                    var div = ru.slice(-1).toUpperCase();
                    return div;
            }
        }
        else {
            return false;
        }
    };
    RutService.ɵprov = ɵɵdefineInjectable({ factory: function RutService_Factory() { return new RutService(); }, token: RutService, providedIn: "root" });
    RutService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], RutService);
    return RutService;
}());

var RutComponent = /** @class */ (function () {
    function RutComponent() {
        this.rut_emiter = new EventEmitter();
    }
    RutComponent.prototype.ngOnInit = function () {
    };
    RutComponent.prototype.rutFormat = function (value) {
        var rut = this.rutClean(value);
        if (rut.length <= 1) {
            return;
        }
        var result = rut.slice(-4, -1) + "-" + rut.substr(rut.length - 1);
        for (var i = 4; i < rut.length; i += 3) {
            result = rut.slice(-3 - i, -i) + "." + result;
        }
        this.rut_chileno = result;
    };
    RutComponent.prototype.rutClean = function (value) {
        return typeof value === 'string' ? value.replace(/[^0-9kK]+/g, '').toUpperCase() : '';
    };
    RutComponent.prototype.validaRUT = function (rut) {
        this.validacionRut = this.validaRUT_(rut);
        this.sendEmiterRut(this.rut_chileno);
    };
    RutComponent.prototype.validaRUT_ = function (rut) {
        var valor = rut;
        valor = this.rutClean(valor);
        // Aislar Cuerpo y Dígito Verificador
        var cuerpo = valor.slice(0, -1);
        var dv = valor.slice(-1).toUpperCase();
        // Si no cumple con el mínimo ej. (n.nnn.nnn)
        if (cuerpo.length < 7 && cuerpo.length >= 0) {
            return true;
        }
        // Calcular Dígito Verificador
        var suma = 0;
        var multiplo = 2;
        // Para cada dígito del Cuerpo
        for (var i = 1; i <= cuerpo.length; i++) {
            // Obtener su Producto con el Múltiplo Correspondiente
            var index = multiplo * Number(valor.charAt(cuerpo.length - i));
            // Sumar al Contador General
            suma = suma + index;
            // Consolidar Múltiplo dentro del rango [2,7]
            if (multiplo < 7) {
                multiplo = multiplo + 1;
            }
            else {
                multiplo = 2;
            }
        }
        // Calcular Dígito Verificador en base al Módulo 11
        var dvEsperado = 11 - (suma % 11);
        // Casos Especiales (0 y K)
        dv = dv === 'K' ? '10' : dv;
        dv = dv === '0' ? '11' : dv;
        // Validar que el Cuerpo coincide con su Dígito Verificador
        if (dvEsperado.toString() !== dv && cuerpo.length >= 0) {
            return true;
        }
        else {
            return false;
        }
    };
    RutComponent.prototype.sendEmiterRut = function (rut) {
        if (!this.validacionRut) {
            switch (this.mode) {
                // el rut limpio 184215551
                case 0:
                    this.rut_emiter.emit(this.rutClean(rut));
                    break;
                // solo el cuerpo del rut  18421555
                case 1:
                    var valor = rut;
                    valor = this.rutClean(valor);
                    var cuerpo = valor.slice(0, -1);
                    this.rut_emiter.emit(cuerpo);
                    break;
                // rut formateado 18.421.555-1
                case 2:
                    this.rut_emiter.emit(rut);
                    break;
                // rut cuerpo - digitov : 18421555-1  
                case 3:
                    var r = rut;
                    r = this.rutClean(r);
                    var c = r.slice(0, -1);
                    var dv = r.slice(-1).toUpperCase();
                    this.rut_emiter.emit(c + '-' + dv);
                    break;
                case 4:
                    var ru = rut;
                    ru = this.rutClean(ru);
                    var div = ru.slice(-1).toUpperCase();
                    this.rut_emiter.emit(div);
                    break;
            }
        }
    };
    __decorate([
        Output()
    ], RutComponent.prototype, "rut_emiter", void 0);
    __decorate([
        Input()
    ], RutComponent.prototype, "mode", void 0);
    RutComponent = __decorate([
        Component({
            selector: 'rut-chile',
            template: "\n  <input type=\"text\"\n  [(ngModel)] = \"rut_chileno\"\n  (focus)=\"rutFormat($event.target.value)\"\n  (keydown)=\"rutFormat($event.target.value)\"\n  (keyup)=\"rutFormat($event.target.value)\"\n  (keypress)=\"validaRUT($event.target.value)\"\n  (blur)=\"validaRUT($event.target.value)\"\n  class=\"input-rut rut\" name=\"username\" id=\"rut_chileno\" placeholder=\"Rut\">\n  <small class=\"danger-rut\" [hidden]=\"!validacionRut\">\n      El rut ingresado no es v\u00E1lido.\n  </small>\n  "
        })
    ], RutComponent);
    return RutComponent;
}());

var RutModule = /** @class */ (function () {
    function RutModule() {
    }
    RutModule = __decorate([
        NgModule({
            declarations: [RutComponent],
            imports: [
                FormsModule
            ],
            exports: [RutComponent]
        })
    ], RutModule);
    return RutModule;
}());

/*
 * Public API Surface of rut
 */

/**
 * Generated bundle index. Do not edit.
 */

export { RutComponent, RutModule, RutService };
//# sourceMappingURL=rut-chileno.js.map
