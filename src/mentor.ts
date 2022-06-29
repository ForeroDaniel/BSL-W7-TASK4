import { Persona } from "./persona";

export class Mentor extends Persona {
    protected contrasena: string;
    constructor(
        nombre: string,
        email: string,
        contrasena: string
    ) {
        super(nombre, email);
        this.contrasena = contrasena;
    }

    getPassword(): string {
        return this.contrasena;
    }
}