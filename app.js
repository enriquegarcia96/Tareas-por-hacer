require("colors");

const { inquirerMenu, pausa, leerInput } = require("./helpers/inquirer");
const Tareas = require("./models/tareas"); //se encarga del CRUD



const main = async () => {

  let opt = "";
  const tareas = new Tareas();

  do {

    //.- Muestra el menu .-//
    opt = await inquirerMenu();

    switch (opt) {
      case "1":
        //crear las tareas
        const desc = await leerInput('Descripción: ');
        tareas.crearTarea( desc );
      break;

      case "2":
        console.log(tareas.listadoArr);
      break;
    }

    await pausa();
  } while (opt !== "0");
};

main();
