interface IPersona {
    nombre: string;
    email: string;
}

abstract class personaContent implements IPersona{
    nombre: string;
    email: string;
    protected constructor(nombre: string, email:string) {
        this.nombre = nombre;
        this.email = email;
    }
    abstract getNombre(): string;
    abstract  getEmail(): string;
}

export class Persona extends personaContent{

    constructor(nombre: string, email: string) {
        super(nombre, email);
    }

    getNombre(): string {
        return this.nombre;
    }

    getEmail(): string {
        return this.email;
    }
}