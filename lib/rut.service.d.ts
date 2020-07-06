import * as i0 from "@angular/core";
export declare class RutService {
    constructor();
    rutFormat(value: string): string;
    rutClean(value: string): string;
    validaRUT(rut: string): boolean;
    getRutChile(mode: number, rut: string): string | boolean;
    static ɵfac: i0.ɵɵFactoryDef<RutService, never>;
    static ɵprov: i0.ɵɵInjectableDef<RutService>;
}
