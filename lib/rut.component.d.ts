import { OnInit, EventEmitter } from '@angular/core';
export declare class RutComponent implements OnInit {
    rut_emiter: EventEmitter<string | number>;
    mode: number;
    validacionRut: boolean;
    rut_chileno: string;
    constructor();
    ngOnInit(): void;
    rutFormat(value: string): void;
    rutClean(value: string): string;
    validaRUT(rut: string): void;
    validaRUT_(rut: string): boolean;
    sendEmiterRut(rut: string): void;
}
