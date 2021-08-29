require("colors");

const { inquirerMenu, pausa } = require("./helpers/inquirer");
const Tareas = require("./models/tareas"); //se encarga del CRUD

const main = async () => {
  
  console.log("Hola mundo");

  let opt = "";

  do {

    //.- Muestra el menu .-//
    opt = await inquirerMenu();
    console.log({ opt });
    await pausa();

  } while (opt !== "0");
};

main();
