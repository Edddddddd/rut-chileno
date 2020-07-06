import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
export class RutComponent {
    constructor() {
        this.rut_emiter = new EventEmitter();
    }
    ngOnInit() {
        if (!this.msjError)
            this.msjE = "El rut ingresado no es válido.";
        else
            this.msjE = this.msjError;
    }
    rutFormat(value) {
        const rut = this.rutClean(value);
        if (rut.length <= 1) {
            return;
        }
        let result = `${rut.slice(-4, -1)}-${rut.substr(rut.length - 1)}`;
        for (let i = 4; i < rut.length; i += 3) {
            result = `${rut.slice(-3 - i, -i)}.${result}`;
        }
        this.rut_chileno = result;
    }
    rutClean(value) {
        return typeof value === 'string' ? value.replace(/[^0-9kK]+/g, '').toUpperCase() : '';
    }
    validaRUT(rut) {
        this.validacionRut = this.validaRUT_(rut);
        this.sendEmiterRut(this.rut_chileno);
    }
    validaRUT_(rut) {
        let valor = rut;
        valor = this.rutClean(valor);
        const cuerpo = valor.slice(0, -1);
        let dv = valor.slice(-1).toUpperCase();
        if (cuerpo.length < 7 && cuerpo.length >= 0) {
            return true;
        }
        let suma = 0;
        let multiplo = 2;
        for (let i = 1; i <= cuerpo.length; i++) {
            const index = multiplo * Number(valor.charAt(cuerpo.length - i));
            suma = suma + index;
            if (multiplo < 7) {
                multiplo = multiplo + 1;
            }
            else {
                multiplo = 2;
            }
        }
        const dvEsperado = 11 - (suma % 11);
        dv = dv === 'K' ? '10' : dv;
        dv = dv === '0' ? '11' : dv;
        if (dvEsperado.toString() !== dv && cuerpo.length >= 0)
            return true;
        else
            return false;
    }
    sendEmiterRut(rut) {
        if (!this.validacionRut) {
            switch (this.mode) {
                case 0:
                    this.rut_emiter.emit(this.rutClean(rut));
                    break;
                case 1:
                    let valor = rut;
                    this.rut_emiter.emit(this.rutClean(valor).slice(0, -1));
                    break;
                case 2:
                    this.rut_emiter.emit(rut);
                    break;
                case 3:
                    let r = rut;
                    this.rut_emiter.emit(this.rutClean(r).slice(0, -1) + '-' + r.slice(-1).toUpperCase());
                    break;
                case 4:
                    let ru = rut;
                    this.rut_emiter.emit(this.rutClean(ru).slice(-1).toUpperCase());
                    break;
            }
        }
    }
}
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
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(RutComponent, [{
        type: Component,
        args: [{
                selector: 'rut-chile',
                template: `
  <input type="text"
  [(ngModel)] = "rut_chileno"
  (focus)="rutFormat($event.target.value)"
  (keydown)="rutFormat($event.target.value)"
  (keyup)="rutFormat($event.target.value)"
  (keypress)="validaRUT($event.target.value)"
  (blur)="validaRUT($event.target.value)"
  class="input-rut rut" name="username" id="rut_chileno" placeholder="Rut">
  <small class="danger-rut" [hidden]="!validacionRut">
      {{msjE}}
  </small>
  `,
                styles: []
            }]
    }], function () { return []; }, { rut_emiter: [{
            type: Output
        }], mode: [{
            type: Input
        }], msjError: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3J1dC1jaGlsZW5vLyIsInNvdXJjZXMiOlsibGliL3J1dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBb0IvRSxNQUFNLE9BQU8sWUFBWTtJQVV2QjtRQVJVLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBbUIsQ0FBQztJQVEzQyxDQUFDO0lBRWpCLFFBQVE7UUFDTixJQUFHLENBQUMsSUFBSSxDQUFDLFFBQVE7WUFDZixJQUFJLENBQUMsSUFBSSxHQUFHLGdDQUFnQyxDQUFDOztZQUU3QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDOUIsQ0FBQztJQUVELFNBQVMsQ0FBQyxLQUFhO1FBQ3JCLE1BQU0sR0FBRyxHQUFXLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekMsSUFBSSxHQUFHLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUNuQixPQUFPO1NBQ1I7UUFFRCxJQUFJLE1BQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNsRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3RDLE1BQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxFQUFFLENBQUM7U0FDL0M7UUFFRCxJQUFJLENBQUMsV0FBVyxH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aW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdydXQtY2hpbGUnLFxuICB0ZW1wbGF0ZTogYFxuICA8aW5wdXQgdHlwZT1cInRleHRcIlxuICBbKG5nTW9kZWwpXSA9IFwicnV0X2NoaWxlbm9cIlxuICAoZm9jdXMpPVwicnV0Rm9ybWF0KCRldmVudC50YXJnZXQudmFsdWUpXCJcbiAgKGtleWRvd24pPVwicnV0Rm9ybWF0KCRldmVudC50YXJnZXQudmFsdWUpXCJcbiAgKGtleXVwKT1cInJ1dEZvcm1hdCgkZXZlbnQudGFyZ2V0LnZhbHVlKVwiXG4gIChrZXlwcmVzcyk9XCJ2YWxpZGFSVVQoJGV2ZW50LnRhcmdldC52YWx1ZSlcIlxuICAoYmx1cik9XCJ2YWxpZGFSVVQoJGV2ZW50LnRhcmdldC52YWx1ZSlcIlxuICBjbGFzcz1cImlucHV0LXJ1dCBydXRcIiBuYW1lPVwidXNlcm5hbWVcIiBpZD1cInJ1dF9jaGlsZW5vXCIgcGxhY2Vob2xkZXI9XCJSdXRcIj5cbiAgPHNtYWxsIGNsYXNzPVwiZGFuZ2VyLXJ1dFwiIFtoaWRkZW5dPVwiIXZhbGlkYWNpb25SdXRcIj5cbiAgICAgIHt7bXNqRX19XG4gIDwvc21hbGw+XG4gIGAsXG4gIHN0eWxlczogW1xuICBdXG59KVxuZXhwb3J0IGNsYXNzIFJ1dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQE91dHB1dCgpIHJ1dF9lbWl0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZyB8IG51bWJlcj4oKTtcbiAgQElucHV0KCkgbW9kZTogbnVtYmVyO1xuICBASW5wdXQoKSBtc2pFcnJvcjogc3RyaW5nO1xuXG4gIHZhbGlkYWNpb25SdXQhOiBib29sZWFuO1xuICBydXRfY2hpbGVubyE6IHN0cmluZztcbiAgbXNqRSE6c3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYoIXRoaXMubXNqRXJyb3IpXG4gICAgICB0aGlzLm1zakUgPSBcIkVsIHJ1dCBpbmdyZXNhZG8gbm8gZXMgdsOhbGlkby5cIjtcbiAgICBlbHNlXG4gICAgICB0aGlzLm1zakUgPSB0aGlzLm1zakVycm9yO1xuICB9XG5cbiAgcnV0Rm9ybWF0KHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBydXQ6IHN0cmluZyA9IHRoaXMucnV0Q2xlYW4odmFsdWUpO1xuICAgIGlmIChydXQubGVuZ3RoIDw9IDEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgcmVzdWx0ID0gYCR7cnV0LnNsaWNlKC00LCAtMSl9LSR7cnV0LnN1YnN0cihydXQubGVuZ3RoIC0gMSl9YDtcbiAgICBmb3IgKGxldCBpID0gNDsgaSA8IHJ1dC5sZW5ndGg7IGkgKz0gMykge1xuICAgICAgcmVzdWx0ID0gYCR7cnV0LnNsaWNlKC0zIC0gaSwgLWkpfS4ke3Jlc3VsdH1gO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLnJ1dF9jaGlsZW5vID0gcmVzdWx0O1xuICB9XG5cbiAgcnV0Q2xlYW4odmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyB2YWx1ZS5yZXBsYWNlKC9bXjAtOWtLXSsvZywgJycpLnRvVXBwZXJDYXNlKCkgOiAnJztcbiAgfVxuICBcbiAgdmFsaWRhUlVUKHJ1dDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy52YWxpZGFjaW9uUnV0ID0gdGhpcy52YWxpZGFSVVRfKHJ1dCk7XG4gICAgdGhpcy5zZW5kRW1pdGVyUnV0KHRoaXMucnV0X2NoaWxlbm8pO1xuICB9XG5cbiAgdmFsaWRhUlVUXyhydXQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGxldCB2YWxvcjogc3RyaW5nID0gcnV0O1xuICAgIHZhbG9yID0gdGhpcy5ydXRDbGVhbih2YWxvcik7XG4gIFxuICAgIGNvbnN0IGN1ZXJwbyA9IHZhbG9yLnNsaWNlKDAsIC0xKTtcbiAgICBsZXQgZHYgPSB2YWxvci5zbGljZSgtMSkudG9VcHBlckNhc2UoKTtcbiAgXG4gICAgaWYgKGN1ZXJwby5sZW5ndGggPCA3ICYmIGN1ZXJwby5sZW5ndGggPj0gMCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICBcbiAgICBsZXQgc3VtYSA9IDA7XG4gICAgbGV0IG11bHRpcGxvID0gMjtcbiAgXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gY3VlcnBvLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBpbmRleCA9IG11bHRpcGxvICogTnVtYmVyKHZhbG9yLmNoYXJBdChjdWVycG8ubGVuZ3RoIC0gaSkpO1xuICAgICAgc3VtYSA9IHN1bWEgKyBpbmRleDtcbiAgICAgIGlmIChtdWx0aXBsbyA8IDcpIHtcbiAgICAgICAgbXVsdGlwbG8gPSBtdWx0aXBsbyArIDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtdWx0aXBsbyA9IDI7XG4gICAgICB9XG4gICAgfVxuICBcbiAgICBjb25zdCBkdkVzcGVyYWRvID0gMTEgLSAoc3VtYSAlIDExKTtcbiAgICBkdiA9IGR2ID09PSAnSycgPyAnMTAnIDogZHY7XG4gICAgZHYgPSBkdiA9PT0gJzAnID8gJzExJyA6IGR2O1xuICBcbiAgICBpZiAoZHZFc3BlcmFkby50b1N0cmluZygpICE9PSBkdiAmJiBjdWVycG8ubGVuZ3RoID49IDApXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICBlbHNlIFxuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc2VuZEVtaXRlclJ1dChydXQ6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmKCF0aGlzLnZhbGlkYWNpb25SdXQpIHtcbiAgICAgIHN3aXRjaCAodGhpcy5tb2RlKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICB0aGlzLnJ1dF9lbWl0ZXIuZW1pdCh0aGlzLnJ1dENsZWFuKHJ1dCkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgbGV0IHZhbG9yOiBzdHJpbmcgPSBydXQ7XG4gICAgICAgICAgdGhpcy5ydXRfZW1pdGVyLmVtaXQodGhpcy5ydXRDbGVhbih2YWxvcikuc2xpY2UoMCwgLTEpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHRoaXMucnV0X2VtaXRlci5lbWl0KHJ1dCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIGxldCByOiBzdHJpbmcgPSBydXQ7XG4gICAgICAgICAgICB0aGlzLnJ1dF9lbWl0ZXIuZW1pdCh0aGlzLnJ1dENsZWFuKHIpLnNsaWNlKDAsIC0xKSArICctJysgci5zbGljZSgtMSkudG9VcHBlckNhc2UoKSk7XG4gICAgICAgICAgICBicmVhazsgIFxuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgbGV0IHJ1OiBzdHJpbmcgPSBydXQ7XG4gICAgICAgICAgdGhpcy5ydXRfZW1pdGVyLmVtaXQodGhpcy5ydXRDbGVhbihydSkuc2xpY2UoLTEpLnRvVXBwZXJDYXNlKCkpO1xuICAgICAgICAgIGJyZWFrOyAgICBcbiAgICAgIH1cbiAgICB9XG4gICAgICBcbiAgfVxuXG59XG4iXX0=