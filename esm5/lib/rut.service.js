import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
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
    RutService.ɵprov = i0.ɵɵdefineInjectable({ token: RutService, factory: RutService.ɵfac, providedIn: 'root' });
    return RutService;
}());
export { RutService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(RutService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnV0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ydXQtY2hpbGVuby8iLCJzb3VyY2VzIjpbImxpYi9ydXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUUzQztJQUtFO0lBQWdCLENBQUM7SUFFakIsOEJBQVMsR0FBVCxVQUFVLEtBQWE7UUFDckIsSUFBTSxHQUFHLEdBQVcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QyxJQUFJLEdBQUcsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQ25CLE9BQU87U0FDUjtRQUVELElBQUksTUFBTSxHQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBSSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFHLENBQUM7UUFDbEUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN0QyxNQUFNLEdBQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBSSxNQUFRLENBQUM7U0FDL0M7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRUQsNkJBQVEsR0FBUixVQUFTLEtBQWE7UUFDcEIsT0FBTyxPQUFPLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDeEYsQ0FBQztJQUVELDhCQUFTLEdBQVQsVUFBVSxHQUFXO1FBQ25CLElBQUksS0FBSyxHQUFXLEdBQUcsQ0FBQztRQUN4QixL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LENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3pCLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFDbkMsT0FBTyxDQUFDLEdBQUcsR0FBRyxHQUFFLEVBQUUsQ0FBQztnQkFDdkIsS0FBSyxDQUFDO29CQUNKLElBQUksRUFBRSxHQUFXLEdBQUcsQ0FBQztvQkFDckIsRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQ3ZCLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFDckMsT0FBTyxHQUFHLENBQUM7YUFDZDtTQUNGO2FBQU07WUFDTCxPQUFPLEtBQUssQ0FBQztTQUNkO0lBRUgsQ0FBQzt3RUF4R1UsVUFBVTtzREFBVixVQUFVLFdBQVYsVUFBVSxtQkFGVCxNQUFNO3FCQUhwQjtDQStHQyxBQTdHRCxJQTZHQztTQTFHWSxVQUFVO2tEQUFWLFVBQVU7Y0FIdEIsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBSdXRTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIHJ1dEZvcm1hdCh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBydXQ6IHN0cmluZyA9IHRoaXMucnV0Q2xlYW4odmFsdWUpO1xuICAgIGlmIChydXQubGVuZ3RoIDw9IDEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgcmVzdWx0ID0gYCR7cnV0LnNsaWNlKC00LCAtMSl9LSR7cnV0LnN1YnN0cihydXQubGVuZ3RoIC0gMSl9YDtcbiAgICBmb3IgKGxldCBpID0gNDsgaSA8IHJ1dC5sZW5ndGg7IGkgKz0gMykge1xuICAgICAgcmVzdWx0ID0gYCR7cnV0LnNsaWNlKC0zIC0gaSwgLWkpfS4ke3Jlc3VsdH1gO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBydXRDbGVhbih2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IHZhbHVlLnJlcGxhY2UoL1teMC05a0tdKy9nLCAnJykudG9VcHBlckNhc2UoKSA6ICcnO1xuICB9XG4gIFxuICB2YWxpZGFSVVQocnV0OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBsZXQgdmFsb3I6IHN0cmluZyA9IHJ1dDtcbiAgICB2YWxvciA9IHRoaXMucnV0Q2xlYW4odmFsb3IpO1xuICBcbiAgICAvLyBBaXNsYXIgQ3VlcnBvIHkgRMOtZ2l0byBWZXJpZmljYWRvclxuICAgIGNvbnN0IGN1ZXJwbyA9IHZhbG9yLnNsaWNlKDAsIC0xKTtcbiAgICBsZXQgZHYgPSB2YWxvci5zbGljZSgtMSkudG9VcHBlckNhc2UoKTtcbiAgXG4gICAgLy8gU2kgbm8gY3VtcGxlIGNvbiBlbCBtw61uaW1vIGVqLiAobi5ubm4ubm5uKVxuICAgIGlmIChjdWVycG8ubGVuZ3RoIDwgNyAmJiBjdWVycG8ubGVuZ3RoID49IDApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgXG4gICAgLy8gQ2FsY3VsYXIgRMOtZ2l0byBWZXJpZmljYWRvclxuICAgIGxldCBzdW1hID0gMDtcbiAgICBsZXQgbXVsdGlwbG8gPSAyO1xuICBcbiAgICAvLyBQYXJhIGNhZGEgZMOtZ2l0byBkZWwgQ3VlcnBvXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gY3VlcnBvLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBPYnRlbmVyIHN1IFByb2R1Y3RvIGNvbiBlbCBNw7psdGlwbG8gQ29ycmVzcG9uZGllbnRlXG4gICAgICBjb25zdCBpbmRleCA9IG11bHRpcGxvICogTnVtYmVyKHZhbG9yLmNoYXJBdChjdWVycG8ubGVuZ3RoIC0gaSkpO1xuICBcbiAgICAgIC8vIFN1bWFyIGFsIENvbnRhZG9yIEdlbmVyYWxcbiAgICAgIHN1bWEgPSBzdW1hICsgaW5kZXg7XG4gIFxuICAgICAgLy8gQ29uc29saWRhciBNw7psdGlwbG8gZGVudHJvIGRlbCByYW5nbyBbMiw3XVxuICAgICAgaWYgKG11bHRpcGxvIDwgNykge1xuICAgICAgICBtdWx0aXBsbyA9IG11bHRpcGxvICsgMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG11bHRpcGxvID0gMjtcbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIC8vIENhbGN1bGFyIETDrWdpdG8gVmVyaWZpY2Fkb3IgZW4gYmFzZSBhbCBNw7NkdWxvIDExXG4gICAgY29uc3QgZHZFc3BlcmFkbyA9IDExIC0gKHN1bWEgJSAxMSk7XG4gIFxuICAgIC8vIENhc29zIEVzcGVjaWFsZXMgKDAgeSBLKVxuICAgIGR2ID0gZHYgPT09ICdLJyA/ICcxMCcgOiBkdjtcbiAgICBkdiA9IGR2ID09PSAnMCcgPyAnMTEnIDogZHY7XG4gIFxuICAgIC8vIFZhbGlkYXIgcXVlIGVsIEN1ZXJwbyBjb2luY2lkZSBjb24gc3UgRMOtZ2l0byBWZXJpZmljYWRvclxuICAgIGlmIChkdkVzcGVyYWRvLnRvU3RyaW5nKCkgIT09IGR2ICYmIGN1ZXJwby5sZW5ndGggPj0gMCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgfVxuXG4gIGdldFJ1dENoaWxlKG1vZGU6IG51bWJlciAscnV0OiBzdHJpbmcpOiBzdHJpbmcgfCBib29sZWFuIHtcblxuICAgIGlmKCF0aGlzLnZhbGlkYVJVVChydXQpKSB7XG4gICAgICBzd2l0Y2ggKG1vZGUpIHtcbiAgICAgICAgLy8gZWwgcnV0IGxpbXBpbyAxODQyMTU1NTFcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgIHJldHVybiB0aGlzLnJ1dENsZWFuKHJ1dCk7XG4gICAgICAgIC8vIHNvbG8gZWwgY3VlcnBvIGRlbCBydXQgIDE4NDIxNTU1XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBsZXQgdmFsb3I6IHN0cmluZyA9IHJ1dDtcbiAgICAgICAgICB2YWxvciA9IHRoaXMucnV0Q2xlYW4odmFsb3IpO1xuICAgICAgICAgIGxldCBjdWVycG8gPSB2YWxvci5zbGljZSgwLCAtMSk7XG4gICAgICAgICAgcmV0dXJuIGN1ZXJwbztcbiAgICAgICAgLy8gcnV0IGZvcm1hdGVhZG8gMTguNDIxLjU1NS0xXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICByZXR1cm4gdGhpcy5ydXRGb3JtYXQocnV0KTtcbiAgICAgICAgLy8gcnV0IGN1ZXJwbyAtIGRpZ2l0b3YgOiAxODQyMTU1NS0xICBcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgbGV0IHI6IHN0cmluZyA9IHJ1dDtcbiAgICAgICAgICAgIHIgPSB0aGlzLnJ1dENsZWFuKHIpO1xuICAgICAgICAgICAgY29uc3QgYyA9IHIuc2xpY2UoMCwgLTEpO1xuICAgICAgICAgICAgbGV0IGR2ID0gci5zbGljZSgtMSkudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgIHJldHVybiBjICsgJy0nKyBkdjtcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIGxldCBydTogc3RyaW5nID0gcnV0O1xuICAgICAgICAgIHJ1ID0gdGhpcy5ydXRDbGVhbihydSk7XG4gICAgICAgICAgbGV0IGRpdiA9IHJ1LnNsaWNlKC0xKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgIHJldHVybiBkaXY7IFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgICAgXG4gIH1cblxufVxuIl19