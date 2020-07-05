import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
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
export { RutComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3J1dC1jaGlsZW5vLyIsInNvdXJjZXMiOlsibGliL3J1dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFvQi9FO0lBV0U7UUFUVSxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQW1CLENBQUM7SUFTM0MsQ0FBQztJQUVqQiwrQkFBUSxHQUFSO0lBQ0EsQ0FBQztJQUVELGdDQUFTLEdBQVQsVUFBVSxLQUFhO1FBQ3JCLElBQU0sR0FBRyxHQUFXLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekMsSUFBSSxHQUFHLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUNuQixPQUFPO1NBQ1I7UUFFRCxJQUFJLE1BQU0sR0FBTSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBRyxDQUFDO1FBQ2xFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDdEMsTUFBTSxHQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQUksTUFBUSxDQUFDO1NBQy9DO1FBRUQsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUM7SUFDNUIsQ0FBQztJQUVELCtCQUFRLEdBQVIsVUFBUyxLQUFhO1FBQ3BCLE9BQU8sT0FBTyxLQUFLLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3hGLENBQUM7SUFFRCxnQ0FBUyxHQUFULFVBQVUsR0FBVztRQUNuQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELGlDQUFVLEdBQVYsVUFBVyxHQUFXO1FBQ3BCLElBQUksS0FBSyxHQUFXLEdBQUcsQ0FBQztRQUN4QixLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUU3QixxQ0FBcUM7UUFDckMsSUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsQyxJQUFJLEVBQUUsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFdkMsNkNBQTZDO1FBQzdDLElBQUksTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksTUFBTSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDM0MsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELDhCQUE4QjtRQUM5QixJQUFJLElBQUksR0FBRyxDQUFDLENBQUM7UUFDYixJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFFakIsOEJBQThCO1FBQzlCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3ZDLHNEQUFzRDtZQUN0RCxJQUFNLEtBQUssR0FBRyxRQUFRLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRWpFLDRCQUE0QjtZQUM1QixJQUFJLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQztZQUVwQiw2Q0FBNkM7WUFDN0MsSUFBSSxRQUFRLEdBQUcsQ0FBQyxFQUFFO2dCQUNoQixRQUFRLEdBQUcsUUFBUSxHQUFHLENBQUMsQ0FBQzthQUN6QjtpQkFBTTtnQkFDTCxRQUFRLEdBQUcsQ0FBQyxDQUFDO2FBQ2Q7U0FDRjtRQUVELG1EQUFtRDtRQUNuRCxJQUFNLFVBQVUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFFcEMsMkJBQTJCO1FBQzNCLEVBQUUsR0FBRyxFQUFFLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUM1QixFQUFFLEdBQUcsRUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFFNUIsMkRBQTJEO1FBQzNELElBQUksVUFBVSxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUN0RCxPQUFPLElBQUksQ0FBQztTQUNiO2FBQU07WUFDTCxPQUFPLEtBQUssQ0FBQztTQUNkO0lBRUgsQ0FBQztJQUVELG9DQUFhLEdBQWIsVUFBYyxHQUFXO1FBQ3ZCLElBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3RCLFFBQVEsSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDakIsMEJBQTBCO2dCQUMxQixLQUFLLENBQUM7b0JBQ0osSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUN6QyxNQUFNO2dCQUNSLG1DQUFtQztnQkFDbkMsS0FBSyxDQUFDO29CQUNKLElBQUksS0FBSyxHQUFXLEdBQUcsQ0FBQztvQkFDeEIsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQzdCLElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2hDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUM3QixNQUFNO2dCQUNSLDhCQUE4QjtnQkFDOUIsS0FBSyxDQUFDO29CQUNKLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUMxQixNQUFNO2dCQUNSLHNDQUFzQztnQkFDdEMsS0FBSyxDQUFDO29CQUNGLElBQUksQ0FBQyxHQUFXLEdBQUcsQ0FBQztvQkFDcEIsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3JCLElBQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3pCLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFDbkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRSxFQUFFLENBQUMsQ0FBQztvQkFDbEMsTUFBTTtnQkFDVixLQUFLLENBQUM7b0JBQ0osSUFBSSxFQUFFLEdBQVcsR0FBRyxDQUFDO29CQUNyQixFQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDdkIsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO29CQUNyQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDMUIsTUFBTTthQUNUO1NBQ0Y7SUFFSCxDQUFDO0lBekhTO1FBQVQsTUFBTSxFQUFFO29EQUFrRDtJQUVsRDtRQUFSLEtBQUssRUFBRTs4Q0FBYztJQUpYLFlBQVk7UUFsQnhCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFFBQVEsRUFBRSxpZkFZVDtTQUdGLENBQUM7T0FDVyxZQUFZLENBNkh4QjtJQUFELG1CQUFDO0NBQUEsQUE3SEQsSUE2SEM7U0E3SFksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncnV0LWNoaWxlJyxcbiAgdGVtcGxhdGU6IGBcbiAgPGlucHV0IHR5cGU9XCJ0ZXh0XCJcbiAgWyhuZ01vZGVsKV0gPSBcInJ1dF9jaGlsZW5vXCJcbiAgKGZvY3VzKT1cInJ1dEZvcm1hdCgkZXZlbnQudGFyZ2V0LnZhbHVlKVwiXG4gIChrZXlkb3duKT1cInJ1dEZvcm1hdCgkZXZlbnQudGFyZ2V0LnZhbHVlKVwiXG4gIChrZXl1cCk9XCJydXRGb3JtYXQoJGV2ZW50LnRhcmdldC52YWx1ZSlcIlxuICAoa2V5cHJlc3MpPVwidmFsaWRhUlVUKCRldmVudC50YXJnZXQudmFsdWUpXCJcbiAgKGJsdXIpPVwidmFsaWRhUlVUKCRldmVudC50YXJnZXQudmFsdWUpXCJcbiAgY2xhc3M9XCJpbnB1dC1ydXQgcnV0XCIgbmFtZT1cInVzZXJuYW1lXCIgaWQ9XCJydXRfY2hpbGVub1wiIHBsYWNlaG9sZGVyPVwiUnV0XCI+XG4gIDxzbWFsbCBjbGFzcz1cImRhbmdlci1ydXRcIiBbaGlkZGVuXT1cIiF2YWxpZGFjaW9uUnV0XCI+XG4gICAgICBFbCBydXQgaW5ncmVzYWRvIG5vIGVzIHbDoWxpZG8uXG4gIDwvc21hbGw+XG4gIGAsXG4gIHN0eWxlczogW1xuICBdXG59KVxuZXhwb3J0IGNsYXNzIFJ1dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQE91dHB1dCgpIHJ1dF9lbWl0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZyB8IG51bWJlcj4oKTtcblxuICBASW5wdXQoKSBtb2RlOiBudW1iZXI7XG5cblxuICB2YWxpZGFjaW9uUnV0ITogYm9vbGVhbjtcblxuICBydXRfY2hpbGVubyE6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbiAgcnV0Rm9ybWF0KHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBydXQ6IHN0cmluZyA9IHRoaXMucnV0Q2xlYW4odmFsdWUpO1xuICAgIGlmIChydXQubGVuZ3RoIDw9IDEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgcmVzdWx0ID0gYCR7cnV0LnNsaWNlKC00LCAtMSl9LSR7cnV0LnN1YnN0cihydXQubGVuZ3RoIC0gMSl9YDtcbiAgICBmb3IgKGxldCBpID0gNDsgaSA8IHJ1dC5sZW5ndGg7IGkgKz0gMykge1xuICAgICAgcmVzdWx0ID0gYCR7cnV0LnNsaWNlKC0zIC0gaSwgLWkpfS4ke3Jlc3VsdH1gO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLnJ1dF9jaGlsZW5vID0gcmVzdWx0O1xuICB9XG5cbiAgcnV0Q2xlYW4odmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyB2YWx1ZS5yZXBsYWNlKC9bXjAtOWtLXSsvZywgJycpLnRvVXBwZXJDYXNlKCkgOiAnJztcbiAgfVxuICBcbiAgdmFsaWRhUlVUKHJ1dDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy52YWxpZGFjaW9uUnV0ID0gdGhpcy52YWxpZGFSVVRfKHJ1dCk7XG4gICAgdGhpcy5zZW5kRW1pdGVyUnV0KHRoaXMucnV0X2NoaWxlbm8pO1xuICB9XG5cbiAgdmFsaWRhUlVUXyhydXQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGxldCB2YWxvcjogc3RyaW5nID0gcnV0O1xuICAgIHZhbG9yID0gdGhpcy5ydXRDbGVhbih2YWxvcik7XG4gIFxuICAgIC8vIEFpc2xhciBDdWVycG8geSBEw61naXRvIFZlcmlmaWNhZG9yXG4gICAgY29uc3QgY3VlcnBvID0gdmFsb3Iuc2xpY2UoMCwgLTEpO1xuICAgIGxldCBkdiA9IHZhbG9yLnNsaWNlKC0xKS50b1VwcGVyQ2FzZSgpO1xuICBcbiAgICAvLyBTaSBubyBjdW1wbGUgY29uIGVsIG3DrW5pbW8gZWouIChuLm5ubi5ubm4pXG4gICAgaWYgKGN1ZXJwby5sZW5ndGggPCA3ICYmIGN1ZXJwby5sZW5ndGggPj0gMCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICBcbiAgICAvLyBDYWxjdWxhciBEw61naXRvIFZlcmlmaWNhZG9yXG4gICAgbGV0IHN1bWEgPSAwO1xuICAgIGxldCBtdWx0aXBsbyA9IDI7XG4gIFxuICAgIC8vIFBhcmEgY2FkYSBkw61naXRvIGRlbCBDdWVycG9cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBjdWVycG8ubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIE9idGVuZXIgc3UgUHJvZHVjdG8gY29uIGVsIE3Dumx0aXBsbyBDb3JyZXNwb25kaWVudGVcbiAgICAgIGNvbnN0IGluZGV4ID0gbXVsdGlwbG8gKiBOdW1iZXIodmFsb3IuY2hhckF0KGN1ZXJwby5sZW5ndGggLSBpKSk7XG4gIFxuICAgICAgLy8gU3VtYXIgYWwgQ29udGFkb3IgR2VuZXJhbFxuICAgICAgc3VtYSA9IHN1bWEgKyBpbmRleDtcbiAgXG4gICAgICAvLyBDb25zb2xpZGFyIE3Dumx0aXBsbyBkZW50cm8gZGVsIHJhbmdvIFsyLDddXG4gICAgICBpZiAobXVsdGlwbG8gPCA3KSB7XG4gICAgICAgIG11bHRpcGxvID0gbXVsdGlwbG8gKyAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbXVsdGlwbG8gPSAyO1xuICAgICAgfVxuICAgIH1cbiAgXG4gICAgLy8gQ2FsY3VsYXIgRMOtZ2l0byBWZXJpZmljYWRvciBlbiBiYXNlIGFsIE3Ds2R1bG8gMTFcbiAgICBjb25zdCBkdkVzcGVyYWRvID0gMTEgLSAoc3VtYSAlIDExKTtcbiAgXG4gICAgLy8gQ2Fzb3MgRXNwZWNpYWxlcyAoMCB5IEspXG4gICAgZHYgPSBkdiA9PT0gJ0snID8gJzEwJyA6IGR2O1xuICAgIGR2ID0gZHYgPT09ICcwJyA/ICcxMScgOiBkdjtcbiAgXG4gICAgLy8gVmFsaWRhciBxdWUgZWwgQ3VlcnBvIGNvaW5jaWRlIGNvbiBzdSBEw61naXRvIFZlcmlmaWNhZG9yXG4gICAgaWYgKGR2RXNwZXJhZG8udG9TdHJpbmcoKSAhPT0gZHYgJiYgY3VlcnBvLmxlbmd0aCA+PSAwKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICB9XG5cbiAgc2VuZEVtaXRlclJ1dChydXQ6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmKCF0aGlzLnZhbGlkYWNpb25SdXQpIHtcbiAgICAgIHN3aXRjaCAodGhpcy5tb2RlKSB7XG4gICAgICAgIC8vIGVsIHJ1dCBsaW1waW8gMTg0MjE1NTUxXG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICB0aGlzLnJ1dF9lbWl0ZXIuZW1pdCh0aGlzLnJ1dENsZWFuKHJ1dCkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyBzb2xvIGVsIGN1ZXJwbyBkZWwgcnV0ICAxODQyMTU1NVxuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgbGV0IHZhbG9yOiBzdHJpbmcgPSBydXQ7XG4gICAgICAgICAgdmFsb3IgPSB0aGlzLnJ1dENsZWFuKHZhbG9yKTtcbiAgICAgICAgICBsZXQgY3VlcnBvID0gdmFsb3Iuc2xpY2UoMCwgLTEpO1xuICAgICAgICAgIHRoaXMucnV0X2VtaXRlci5lbWl0KGN1ZXJwbyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIC8vIHJ1dCBmb3JtYXRlYWRvIDE4LjQyMS41NTUtMVxuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgdGhpcy5ydXRfZW1pdGVyLmVtaXQocnV0KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgLy8gcnV0IGN1ZXJwbyAtIGRpZ2l0b3YgOiAxODQyMTU1NS0xICBcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgbGV0IHI6IHN0cmluZyA9IHJ1dDtcbiAgICAgICAgICAgIHIgPSB0aGlzLnJ1dENsZWFuKHIpO1xuICAgICAgICAgICAgY29uc3QgYyA9IHIuc2xpY2UoMCwgLTEpO1xuICAgICAgICAgICAgbGV0IGR2ID0gci5zbGljZSgtMSkudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgIHRoaXMucnV0X2VtaXRlci5lbWl0KGMgKyAnLScrIGR2KTtcbiAgICAgICAgICAgIGJyZWFrOyAgXG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBsZXQgcnU6IHN0cmluZyA9IHJ1dDtcbiAgICAgICAgICBydSA9IHRoaXMucnV0Q2xlYW4ocnUpO1xuICAgICAgICAgIGxldCBkaXYgPSBydS5zbGljZSgtMSkudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICB0aGlzLnJ1dF9lbWl0ZXIuZW1pdChkaXYpO1xuICAgICAgICAgIGJyZWFrOyAgICBcbiAgICAgIH1cbiAgICB9XG4gICAgICBcbiAgfVxuXG59XG4iXX0=