export declare class RutService {
    rut_chileno: string;
    constructor();
    rutFormat(value: string): string;
    rutClean(value: string): string;
    validaRUT(rut: string): boolean;
    getRutChile(mode: number, rut: string): string | number | boolean;
}
