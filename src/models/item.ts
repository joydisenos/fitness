import { Ejercicio } from "./ejercicio";

export interface Item {
    key?: string;
    nombre: string;
    finalizado: boolean;
    tiempo: string;
    observaciones: string;
    ejercicios: Array<Ejercicio>;
}