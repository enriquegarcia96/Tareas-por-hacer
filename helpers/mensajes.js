require("colors");

const mostrarMenu = () => {

    //uso new Promise porque el return de esta funcion "mostrarmenu"
    return new Promise((resolve) => {
    console.clear();
    console.log("==============================".green);
    console.log("Seleccione una opcíon");
    console.log("==============================\n".green);

    console.log(`${"1.".green} Crear tarea`);
    console.log(`${"2.".green} Listar tareas`);
    console.log(`${"3.".green} Listar tareas completadas`);
    console.log(`${"4.".green} Listar tareas pendientes`);
    console.log(`${"5.".green} Completar tarea(s)`);
    console.log(`${"6.".green} Borar tarea`);
    console.log(`${"0.".green} Salir \n`);

    //recibe la informacion del usuario
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question("Seleccion una opción: ", (opt) => {
      readline.close();
      resolve(opt);
    });
  });
};

const pausa = () => {

    //uso new Promise porque el return de esta funcion "pausa"
  return new Promise((resolve) => {
    //recibe la informacion del usuario
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question(`\nPresione ${"ENTER".green} para continuar\n`, (opt) => {
      readline.close();
      resolve()
    });
  });
};

module.exports = {
  mostrarMenu,
  pausa,
};
