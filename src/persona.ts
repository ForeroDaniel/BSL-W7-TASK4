export class Persona {
    public nombre: string;
    public email: string;

    constructor(
        nombre: string,
        email: string
    ) {
        this.nombre = nombre;
        this.email = email;
    }

    getNombre(): string {
        return this.nombre;
    }

    getEmail(): string {
        return this.email;
    }
}