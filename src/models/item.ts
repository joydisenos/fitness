import { Ejercicio } from "./ejercicio";

export interface Item {
    nombre: string;
    ejercicios: Array<Ejercicio>;
}