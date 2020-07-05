(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('rut-chileno', ['exports', '@angular/core', '@angular/forms'], factory) :
    (global = global || self, factory(global['rut-chileno'] = {}, global.ng.core, global.ng.forms));
}(this, (function (exports, core, forms) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __createBinding(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    }

    function __exportStar(m, exports) {
        for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

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
        RutService.ɵprov = core.ɵɵdefineInjectable({ factory: function RutService_Factory() { return new RutService(); }, token: RutService, providedIn: "root" });
        RutService = __decorate([
            core.Injectable({
                providedIn: 'root'
            })
        ], RutService);
        return RutService;
    }());

    var RutComponent = /** @class */ (function () {
        function RutComponent() {
            this.rut_emiter = new core.EventEmitter();
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
            core.Output()
        ], RutComponent.prototype, "rut_emiter", void 0);
        __decorate([
            core.Input()
        ], RutComponent.prototype, "mode", void 0);
        RutComponent = __decorate([
            core.Component({
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
            core.NgModule({
                declarations: [RutComponent],
                imports: [
                    forms.FormsModule
                ],
                exports: [RutComponent]
            })
        ], RutModule);
        return RutModule;
    }());

    exports.RutComponent = RutComponent;
    exports.RutModule = RutModule;
    exports.RutService = RutService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=rut-chileno.umd.js.map
