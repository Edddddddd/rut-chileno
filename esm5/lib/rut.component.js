import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
var RutComponent = /** @class */ (function () {
    function RutComponent() {
        this.rut_emiter = new EventEmitter();
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
    RutComponent.ɵcmp = i0.ɵɵdefineComponent({ type: RutComponent, selectors: [["rut-chile"]], inputs: { mode: "mode", msjError: "msjError" }, outputs: { rut_emiter: "rut_emiter" }, decls: 3, vars: 3, consts: [["type", "text", "name", "username", "id", "rut_chileno", "placeholder", "Rut", 1, "input-rut", "rut", 3, "ngModel", "ngModelChange", "focus", "keydown", "keyup", "keypress", "blur"], [1, "danger-rut", 3, "hidden"]], template: function RutComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "input", 0);
            i0.ɵɵlistener("ngModelChange", function RutComponent_Template_input_ngModelChange_0_listener($event) { return ctx.rut_chileno = $event; })("focus", function RutComponent_Template_input_focus_0_listener($event) { return ctx.rutFormat($event.target.value); })("keydown", function RutComponent_Template_input_keydown_0_listener($event) { return ctx.rutFormat($event.target.value); })("keyup", function RutComponent_Template_input_keyup_0_listener($event) { return ctx.rutFormat($event.target.value); })("keypress", function RutComponent_Template_input_keypress_0_listener($event) { return ctx.validaRUT($event.target.value); })("blur", function RutComponent_Template_input_blur_0_listener($event) { return ctx.validaRUT($event.target.value); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(1, "small", 1);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngModel", ctx.rut_chileno);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("hidden", !ctx.validacionRut);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", ctx.msjE, " ");
        } }, directives: [i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgModel], encapsulation: 2 });
    return RutComponent;
}());
export { RutComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(RutComponent, [{
        type: Component,
        args: [{
                selector: 'rut-chile',
                template: "\n  <input type=\"text\"\n  [(ngModel)] = \"rut_chileno\"\n  (focus)=\"rutFormat($event.target.value)\"\n  (keydown)=\"rutFormat($event.target.value)\"\n  (keyup)=\"rutFormat($event.target.value)\"\n  (keypress)=\"validaRUT($event.target.value)\"\n  (blur)=\"validaRUT($event.target.value)\"\n  class=\"input-rut rut\" name=\"username\" id=\"rut_chileno\" placeholder=\"Rut\">\n  <small class=\"danger-rut\" [hidden]=\"!validacionRut\">\n      {{msjE}}\n  </small>\n  ",
                styles: []
            }]
    }], function () { return []; }, { rut_emiter: [{
            type: Output
        }], mode: [{
            type: Input
        }], msjError: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3J1dC1jaGlsZW5vLyIsInNvdXJjZXMiOlsibGliL3J1dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBRS9FO0lBNEJFO1FBUlUsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFtQixDQUFDO0lBUTNDLENBQUM7SUFFakIsK0JBQVEsR0FBUjtRQUNFLElBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUTtZQUNmLElBQUksQ0FBQyxJQUFJLEdBQUcsZ0NBQWdDLENBQUM7O1lBRTdDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUM5QixDQUFDO0lBRUQsZ0NBQVMsR0FBVCxVQUFVLEtBQWE7UUFDckIsSUFBTSxHQUFHLEdBQVcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QyxJQUFJLEdBQUcsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQ25CLE9BQU87U0FDUjtRQUVELElBQUksTUFBTSxHQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBSSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFHLENBQUM7UUFDbEUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN0QyxNQUFNLEdBQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBSSxNQUFRLENBQUM7U0FDL0M7UUFFRCxJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQztJQUM1QixDQUFD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QUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdydXQtY2hpbGUnLFxuICB0ZW1wbGF0ZTogYFxuICA8aW5wdXQgdHlwZT1cInRleHRcIlxuICBbKG5nTW9kZWwpXSA9IFwicnV0X2NoaWxlbm9cIlxuICAoZm9jdXMpPVwicnV0Rm9ybWF0KCRldmVudC50YXJnZXQudmFsdWUpXCJcbiAgKGtleWRvd24pPVwicnV0Rm9ybWF0KCRldmVudC50YXJnZXQudmFsdWUpXCJcbiAgKGtleXVwKT1cInJ1dEZvcm1hdCgkZXZlbnQudGFyZ2V0LnZhbHVlKVwiXG4gIChrZXlwcmVzcyk9XCJ2YWxpZGFSVVQoJGV2ZW50LnRhcmdldC52YWx1ZSlcIlxuICAoYmx1cik9XCJ2YWxpZGFSVVQoJGV2ZW50LnRhcmdldC52YWx1ZSlcIlxuICBjbGFzcz1cImlucHV0LXJ1dCBydXRcIiBuYW1lPVwidXNlcm5hbWVcIiBpZD1cInJ1dF9jaGlsZW5vXCIgcGxhY2Vob2xkZXI9XCJSdXRcIj5cbiAgPHNtYWxsIGNsYXNzPVwiZGFuZ2VyLXJ1dFwiIFtoaWRkZW5dPVwiIXZhbGlkYWNpb25SdXRcIj5cbiAgICAgIHt7bXNqRX19XG4gIDwvc21hbGw+XG4gIGAsXG4gIHN0eWxlczogW1xuICBdXG59KVxuZXhwb3J0IGNsYXNzIFJ1dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQE91dHB1dCgpIHJ1dF9lbWl0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZyB8IG51bWJlcj4oKTtcbiAgQElucHV0KCkgbW9kZTogbnVtYmVyO1xuICBASW5wdXQoKSBtc2pFcnJvcjogc3RyaW5nO1xuXG4gIHZhbGlkYWNpb25SdXQhOiBib29sZWFuO1xuICBydXRfY2hpbGVubyE6IHN0cmluZztcbiAgbXNqRSE6c3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYoIXRoaXMubXNqRXJyb3IpXG4gICAgICB0aGlzLm1zakUgPSBcIkVsIHJ1dCBpbmdyZXNhZG8gbm8gZXMgdsOhbGlkby5cIjtcbiAgICBlbHNlXG4gICAgICB0aGlzLm1zakUgPSB0aGlzLm1zakVycm9yO1xuICB9XG5cbiAgcnV0Rm9ybWF0KHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBydXQ6IHN0cmluZyA9IHRoaXMucnV0Q2xlYW4odmFsdWUpO1xuICAgIGlmIChydXQubGVuZ3RoIDw9IDEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgcmVzdWx0ID0gYCR7cnV0LnNsaWNlKC00LCAtMSl9LSR7cnV0LnN1YnN0cihydXQubGVuZ3RoIC0gMSl9YDtcbiAgICBmb3IgKGxldCBpID0gNDsgaSA8IHJ1dC5sZW5ndGg7IGkgKz0gMykge1xuICAgICAgcmVzdWx0ID0gYCR7cnV0LnNsaWNlKC0zIC0gaSwgLWkpfS4ke3Jlc3VsdH1gO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLnJ1dF9jaGlsZW5vID0gcmVzdWx0O1xuICB9XG5cbiAgcnV0Q2xlYW4odmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyB2YWx1ZS5yZXBsYWNlKC9bXjAtOWtLXSsvZywgJycpLnRvVXBwZXJDYXNlKCkgOiAnJztcbiAgfVxuICBcbiAgdmFsaWRhUlVUKHJ1dDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy52YWxpZGFjaW9uUnV0ID0gdGhpcy52YWxpZGFSVVRfKHJ1dCk7XG4gICAgdGhpcy5zZW5kRW1pdGVyUnV0KHRoaXMucnV0X2NoaWxlbm8pO1xuICB9XG5cbiAgdmFsaWRhUlVUXyhydXQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGxldCB2YWxvcjogc3RyaW5nID0gcnV0O1xuICAgIHZhbG9yID0gdGhpcy5ydXRDbGVhbih2YWxvcik7XG4gIFxuICAgIGNvbnN0IGN1ZXJwbyA9IHZhbG9yLnNsaWNlKDAsIC0xKTtcbiAgICBsZXQgZHYgPSB2YWxvci5zbGljZSgtMSkudG9VcHBlckNhc2UoKTtcbiAgXG4gICAgaWYgKGN1ZXJwby5sZW5ndGggPCA3ICYmIGN1ZXJwby5sZW5ndGggPj0gMCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICBcbiAgICBsZXQgc3VtYSA9IDA7XG4gICAgbGV0IG11bHRpcGxvID0gMjtcbiAgXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gY3VlcnBvLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBpbmRleCA9IG11bHRpcGxvICogTnVtYmVyKHZhbG9yLmNoYXJBdChjdWVycG8ubGVuZ3RoIC0gaSkpO1xuICAgICAgc3VtYSA9IHN1bWEgKyBpbmRleDtcbiAgICAgIGlmIChtdWx0aXBsbyA8IDcpIHtcbiAgICAgICAgbXVsdGlwbG8gPSBtdWx0aXBsbyArIDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtdWx0aXBsbyA9IDI7XG4gICAgICB9XG4gICAgfVxuICBcbiAgICBjb25zdCBkdkVzcGVyYWRvID0gMTEgLSAoc3VtYSAlIDExKTtcbiAgICBkdiA9IGR2ID09PSAnSycgPyAnMTAnIDogZHY7XG4gICAgZHYgPSBkdiA9PT0gJzAnID8gJzExJyA6IGR2O1xuICBcbiAgICBpZiAoZHZFc3BlcmFkby50b1N0cmluZygpICE9PSBkdiAmJiBjdWVycG8ubGVuZ3RoID49IDApXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICBlbHNlIFxuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc2VuZEVtaXRlclJ1dChydXQ6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmKCF0aGlzLnZhbGlkYWNpb25SdXQpIHtcbiAgICAgIHN3aXRjaCAodGhpcy5tb2RlKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICB0aGlzLnJ1dF9lbWl0ZXIuZW1pdCh0aGlzLnJ1dENsZWFuKHJ1dCkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgbGV0IHZhbG9yOiBzdHJpbmcgPSBydXQ7XG4gICAgICAgICAgdGhpcy5ydXRfZW1pdGVyLmVtaXQodGhpcy5ydXRDbGVhbih2YWxvcikuc2xpY2UoMCwgLTEpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHRoaXMucnV0X2VtaXRlci5lbWl0KHJ1dCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIGxldCByOiBzdHJpbmcgPSBydXQ7XG4gICAgICAgICAgICB0aGlzLnJ1dF9lbWl0ZXIuZW1pdCh0aGlzLnJ1dENsZWFuKHIpLnNsaWNlKDAsIC0xKSArICctJysgci5zbGljZSgtMSkudG9VcHBlckNhc2UoKSk7XG4gICAgICAgICAgICBicmVhazsgIFxuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgbGV0IHJ1OiBzdHJpbmcgPSBydXQ7XG4gICAgICAgICAgdGhpcy5ydXRfZW1pdGVyLmVtaXQodGhpcy5ydXRDbGVhbihydSkuc2xpY2UoLTEpLnRvVXBwZXJDYXNlKCkpO1xuICAgICAgICAgIGJyZWFrOyAgICBcbiAgICAgIH1cbiAgICB9XG4gICAgICBcbiAgfVxuXG59XG4iXX0=