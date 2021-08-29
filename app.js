require('colors');

const { inquirerMenu } = require('./helpers/inquirer');


const main = async() => {

    console.clear()
    console.log('Hola mundo')    

    let opt = '';

    do{
        //.- Mustra el menu .-//
        opt = await inquirerMenu();
        console.log({opt});

        
        

    }while(opt !== '0')


    // pausa();

}



main()