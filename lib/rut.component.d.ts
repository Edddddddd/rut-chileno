import { OnInit, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class RutComponent implements OnInit {
    rut_emiter: EventEmitter<string | number>;
    mode: number;
    msjError: string;
    validacionRut: boolean;
    rut_chileno: string;
    msjE: string;
    constructor();
    ngOnInit(): void;
    rutFormat(value: string): void;
    rutClean(value: string): string;
    validaRUT(rut: string): void;
    validaRUT_(rut: string): boolean;
    sendEmiterRut(rut: string): void;
    static ɵfac: i0.ɵɵFactoryDef<RutComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<RutComponent, "rut-chile", never, { "mode": "mode"; "msjError": "msjError"; }, { "rut_emiter": "rut_emiter"; }, never, never>;
}
