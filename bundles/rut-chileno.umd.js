(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('rut-chileno', ['exports', '@angular/core', '@angular/forms'], factory) :
    (global = global || self, factory(global['rut-chileno'] = {}, global.ng.core, global.ng.forms));
}(this, (function (exports, core, forms) { 'use strict';

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
        RutService.ɵfac = function RutService_Factory(t) { return new (t || RutService)(); };
        RutService.ɵprov = core.ɵɵdefineInjectable({ token: RutService, factory: RutService.ɵfac, providedIn: 'root' });
        return RutService;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(RutService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return []; }, null); })();

    var RutComponent = /** @class */ (function () {
        function RutComponent() {
            this.rut_emiter = new core.EventEmitter();
        }
        RutComponent.prototype.ngOnInit = function () {
            if (!this.msjError)
                this.msjE = "El rut ingresado no es válido.";
            else
                this.msjE = this.msjError;
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
            var cuerpo = valor.slice(0, -1);
            var dv = valor.slice(-1).toUpperCase();
            if (cuerpo.length < 7 && cuerpo.length >= 0) {
                return true;
            }
            var suma = 0;
            var multiplo = 2;
            for (var i = 1; i <= cuerpo.length; i++) {
                var index = multiplo * Number(valor.charAt(cuerpo.length - i));
                suma = suma + index;
                if (multiplo < 7) {
                    multiplo = multiplo + 1;
                }
                else {
                    multiplo = 2;
                }
            }
            var dvEsperado = 11 - (suma % 11);
            dv = dv === 'K' ? '10' : dv;
            dv = dv === '0' ? '11' : dv;
            if (dvEsperado.toString() !== dv && cuerpo.length >= 0)
                return true;
            else
                return false;
        };
        RutComponent.prototype.sendEmiterRut = function (rut) {
            if (!this.validacionRut) {
                switch (this.mode) {
                    case 0:
                        this.rut_emiter.emit(this.rutClean(rut));
                        break;
                    case 1:
                        var valor = rut;
                        this.rut_emiter.emit(this.rutClean(valor).slice(0, -1));
                        break;
                    case 2:
                        this.rut_emiter.emit(rut);
                        break;
                    case 3:
                        var r = rut;
                        this.rut_emiter.emit(this.rutClean(r).slice(0, -1) + '-' + r.slice(-1).toUpperCase());
                        break;
                    case 4:
                        var ru = rut;
                        this.rut_emiter.emit(this.rutClean(ru).slice(-1).toUpperCase());
                        break;
                }
            }
        };
        RutComponent.ɵfac = function RutComponent_Factory(t) { return new (t || RutComponent)(); };
        RutComponent.ɵcmp = core.ɵɵdefineComponent({ type: RutComponent, selectors: [["rut-chile"]], inputs: { mode: "mode", msjError: "msjError" }, outputs: { rut_emiter: "rut_emiter" }, decls: 3, vars: 3, consts: [["type", "text", "name", "username", "id", "rut_chileno", "placeholder", "Rut", 1, "input-rut", "rut", 3, "ngModel", "ngModelChange", "focus", "keydown", "keyup", "keypress", "blur"], [1, "danger-rut", 3, "hidden"]], template: function RutComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "input", 0);
                core.ɵɵlistener("ngModelChange", function RutComponent_Template_input_ngModelChange_0_listener($event) { return ctx.rut_chileno = $event; })("focus", function RutComponent_Template_input_focus_0_listener($event) { return ctx.rutFormat($event.target.value); })("keydown", function RutComponent_Template_input_keydown_0_listener($event) { return ctx.rutFormat($event.target.value); })("keyup", function RutComponent_Template_input_keyup_0_listener($event) { return ctx.rutFormat($event.target.value); })("keypress", function RutComponent_Template_input_keypress_0_listener($event) { return ctx.validaRUT($event.target.value); })("blur", function RutComponent_Template_input_blur_0_listener($event) { return ctx.validaRUT($event.target.value); });
                core.ɵɵelementEnd();
                core.ɵɵelementStart(1, "small", 1);
                core.ɵɵtext(2);
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵproperty("ngModel", ctx.rut_chileno);
                core.ɵɵadvance(1);
                core.ɵɵproperty("hidden", !ctx.validacionRut);
                core.ɵɵadvance(1);
                core.ɵɵtextInterpolate1(" ", ctx.msjE, " ");
            } }, directives: [forms.DefaultValueAccessor, forms.NgControlStatus, forms.NgModel], encapsulation: 2 });
        return RutComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(RutComponent, [{
            type: core.Component,
            args: [{
                    selector: 'rut-chile',
                    template: "\n  <input type=\"text\"\n  [(ngModel)] = \"rut_chileno\"\n  (focus)=\"rutFormat($event.target.value)\"\n  (keydown)=\"rutFormat($event.target.value)\"\n  (keyup)=\"rutFormat($event.target.value)\"\n  (keypress)=\"validaRUT($event.target.value)\"\n  (blur)=\"validaRUT($event.target.value)\"\n  class=\"input-rut rut\" name=\"username\" id=\"rut_chileno\" placeholder=\"Rut\">\n  <small class=\"danger-rut\" [hidden]=\"!validacionRut\">\n      {{msjE}}\n  </small>\n  ",
                    styles: []
                }]
        }], function () { return []; }, { rut_emiter: [{
                type: core.Output
            }], mode: [{
                type: core.Input
            }], msjError: [{
                type: core.Input
            }] }); })();

    var RutModule = /** @class */ (function () {
        function RutModule() {
        }
        RutModule.ɵmod = core.ɵɵdefineNgModule({ type: RutModule });
        RutModule.ɵinj = core.ɵɵdefineInjector({ factory: function RutModule_Factory(t) { return new (t || RutModule)(); }, imports: [[
                    forms.FormsModule
                ]] });
        return RutModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(RutModule, { declarations: [RutComponent], imports: [forms.FormsModule], exports: [RutComponent] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(RutModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [RutComponent],
                    imports: [
                        forms.FormsModule
                    ],
                    exports: [RutComponent]
                }]
        }], null, null); })();

    exports.RutComponent = RutComponent;
    exports.RutModule = RutModule;
    exports.RutService = RutService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=rut-chileno.umd.js.map
