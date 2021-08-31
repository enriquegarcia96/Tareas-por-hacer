require("colors");

const { guardarDB, leerDB } = require("./helpers/guardarArchivo");
const {
  inquirerMenu,
  pausa,
  leerInput,
  listadoTareasBorrar,
  confirmar,
  mostrarListadoChecklist,
} = require("./helpers/inquirer");
const Tareas = require("./models/tareas"); //se encarga del CRUD

const main = async () => {
  let opt = "";
  const tareas = new Tareas();

  const tareasDb = leerDB();

  if (tareasDb) {
    //.- carga las tareas .-//
    tareas.cargarTareasFromArray(tareasDb);
  }

  do {
    //.- Muestra el menu .-//
    opt = await inquirerMenu();

    switch (opt) {
      case "1":
        //crear las tareas
        const desc = await leerInput("Descripción: ");
        tareas.crearTarea(desc);
        break;

      case "2":
        tareas.listadoCompleto();
        break;

      case "3": //listar completadas
        tareas.listarPendientesCompletadas(true);
        break;

      case "4": //listarPendiente
        tareas.listarPendientesCompletadas(false);
      break;

      case '5': //Completado | pendiente
        const ids  = await mostrarListadoChecklist(tareas.listadoArr)
        // console.log(ids)
        tareas.toggleCompletadas(ids)
      break;


      case "6":
        const id = await listadoTareasBorrar(tareas.listadoArr);

        if (id !== "0") {
          //todo: preguntar si está seguro.
          const ok = await confirmar("¿Esta seguro?");
          if (ok) {
            tareas.borrarTarea(id);
            console.log("¡Tarea Borrada con exito!".green);
          }
        }

        break;
    }

    //.- guardar la tarea .-//
    guardarDB(tareas.listadoArr);

    await pausa();
  } while (opt !== "0");
};

main();
