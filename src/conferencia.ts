import { Estudiante } from "./estudiante";
import { Mentor } from "./mentor";

export class Conferencia {
    public nombreConferencia: string;
    public aforo: 100;
    protected mentor: Mentor;
    protected estudiantes: Estudiante[];

    constructor(
        nombreConferencia: string,
        aforo: 100,
        mentor: Mentor
    ) {
        this.nombreConferencia = nombreConferencia;
        this.aforo = aforo;
        this.mentor = mentor;
        this.estudiantes = [];
    }

    getMentor(): Mentor {
        return this.mentor;
    }

    getEstudiantes(): Estudiante[] {
        return this.estudiantes;
    }

    addEstudiantes(estudiante: Estudiante):void{
        if (this.estudiantes.length <= this.aforo) {
            this.estudiantes.push(estudiante)
        }
    }
}