require("colors");

const { inquirerMenu, pausa } = require("./helpers/inquirer");

const main = async () => {
  console.clear();
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
