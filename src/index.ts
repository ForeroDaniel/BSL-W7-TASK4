import { Conferencia } from "./conferencia";
import { Estudiante } from "./estudiante";
import { Mentor } from "./mentor";
import { Menu } from './menu'



let listaMentores: Mentor[] = [];
let listaEstudiantes: Estudiante[] = [];
let listaConferencia: Conferencia[] = [];



(async () => {
  const menu = new Menu()
    while (menu.isActive()) {

      menu.printMenu()
      let key = await menu.getInt('seleccione un número de la lista:')
    
      switch (key) {
        case 0:
          console.log('0: ',key);
          menu.close()
          process.exit()

          break;
        
        case 1:
          console.log("agregando mentor")
          const nombreDeMentor = await menu.getString("Ingrese nombre Completo, luego presione enter");
          const correoDeMentor = await menu.getString("Ingrese correo electrónico, luego presione enter");
          const contrasena = await menu.getString("Ingrese nueva contraseña, luego presione enter");
          let validarCorreoMentor = listaMentores.some(
              (e) => e.getEmail() === correoDeMentor
          );
          if (validarCorreoMentor) {
            console.log("El correo ya se encuentra registrado");
          } else {
            listaMentores.push(
                new Mentor(nombreDeMentor, correoDeMentor, contrasena)
            );
          }
          break;
        
        case 2:
          console.log('agregando estudiante');
          const nombreDeEstudiante = await menu.getString("Ingrese nombre Completo, luego presione enter");
          const correoDeEstudiante = await menu.getString("Ingrese correo electrónico, luego presione enter");
          let validarCorreoEstudiante = listaEstudiantes.some(
              (e) => e.getEmail() === correoDeEstudiante
          )
          if (validarCorreoEstudiante) {
            console.log("El correo ya se encuentra registrado");
          }  else {
            listaEstudiantes.push(
                new Estudiante(nombreDeEstudiante, correoDeEstudiante)
            );
          }
          break;
        
        case 3:
          console.log('agregando nueva conferencia');
          const validarMentorCorreo = await menu.getString("Ingrese el correo del mentor, luego presione enter");
          const validarMentorContrasena = await menu.getString("Ingrese la contraseña, luego presione enter");

          function mentorValidacion(listaMentores: Mentor[], mail: string, password: string ) {
            return listaMentores.find(
                (e) => e.getEmail() === mail && e.getPassword() === password
            );
          }

          let validarMentor: Mentor | undefined = mentorValidacion(listaMentores, validarMentorCorreo, validarMentorContrasena)

          if (validarMentor === undefined){
            console.log("Los datos ingresados no son válidos");
          } else {
            const nombreConferencia = await menu.getString("Ingrese nombre de la Conferencia, luego presione enter");
            const cantidadMaxima = 100;

          listaConferencia.push(
              new Conferencia(nombreConferencia,cantidadMaxima,validarMentor)
          )
          }

          break;
      
        case 4:
          console.log(`lista de conferencias: 
                      ${listaConferencia.map((e)=>e.nombreConferencia)}`
          );
          break;
      
        case 5:
          console.log('lista de conferencias por mentores ');
          const nombreDelMentor: string = await menu.getString("Ingrese nombre del mentor, luego presione enter");
          const encontrarMentor: Mentor | undefined = listaMentores.find(
              (e)=>e.getNombre() === nombreDelMentor
          );
          if (encontrarMentor === undefined){
            console.log('El mentor no se encuentra registrado');
          }  else {
            let conferenciaPorMentor: Conferencia[] = listaConferencia.filter(
                (e)=> e.getMentor().getNombre() === nombreDelMentor
            );
            console.log(conferenciaPorMentor.map((e)=>e.nombreConferencia))
          }
          break;
      
        case 6:
          console.log('registrándose en una conferencia: ');
          const registrarCorreo: string = await menu.getString("Ingrese correo electrónico, luego presione enter");
          const validarDatos: Estudiante | undefined = listaEstudiantes.find(
              (e)=>e.getEmail() === registrarCorreo
          );
          if (validarDatos === undefined){
            console.log('El estudiante no se encuentra en la base de datos')
          } else {
            const ingresarConferencia: string = await menu.getString("Ingrese el nombre de la conferencia, luego presione enter");

          const validarConferencia: Conferencia | undefined = listaConferencia.find(
              (e)=>e.nombreConferencia === ingresarConferencia
          );
          if (validarConferencia === undefined) {
            console.log('la conferencia no existe');
          } else {
            if (validarConferencia.getEstudiantes().length === 100){
              console.log('No hay cupo disponible');
            } else {
              const confirmarConferencia: Conferencia | undefined = listaConferencia.find(
                      (e)=>e.nombreConferencia === ingresarConferencia
                  );
              if (confirmarConferencia === undefined) {
                console.log("la conferencia no existe");
              } else {
                const validacionCorreoUnico = confirmarConferencia.getEstudiantes().some(
                    (e) => e.getEmail() === registrarCorreo
                );
                if (validacionCorreoUnico === true) {
                  console.log('el estudiante ya esta registrado');
                } else {
                  confirmarConferencia.addEstudiantes(validarDatos);
                  console.log(`registro exitoso ${registrarCorreo} en ${confirmarConferencia.nombreConferencia}`)
                }

              }
            }
          }

          }

          break;
        

        default:
          console.log('Debe elegir una opción valida');
          //menu.close()
          break;
      }
    }
    
  console.log('Adios');
    
  })()


