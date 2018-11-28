import { Ejercicio } from "./ejercicio";
import { Semana } from "./semana";

export interface Item {
    key?: string;
    nombre: string;
    finalizado: boolean;
    tiempo: string;
    observaciones: string;
    ejercicios: Array<Ejercicio>;
    semana:Array<Semana>;
}