import { Persona } from "./persona";

export class Estudiante extends Persona {
    constructor(
        nombre: string,
        email: string
    ) {
        super(nombre, email);
    }
}