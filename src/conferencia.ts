import { Estudiante } from "./estudiante";
import { Mentor } from "./mentor";

interface IConferencia {
    nombreConferencia: string;
    aforo: number;
    }

abstract class conferenceContent implements IConferencia{
    public nombreConferencia: string;
    public aforo: number;
    protected constructor(nombreConferencia: string, aforo: number) {
        this.nombreConferencia = nombreConferencia;
        this.aforo = aforo;
    }
    abstract getMentor(): Mentor
    abstract getEstudiantes(): Estudiante[]
}

export class Conferencia extends conferenceContent{
    protected mentor: Mentor;
    protected estudiantes: Estudiante[];

    constructor(
        nombreConferencia: string,
        aforo: 100,
        mentor: Mentor
    ) {
        super(nombreConferencia, aforo)
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