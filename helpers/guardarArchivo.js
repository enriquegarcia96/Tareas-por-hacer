const fs = require('fs');



const archivo = './db/data.json';

const guardarDB = ( data ) => {


    //.- JSON.stringify convierte un objeto a String .-//
    fs.writeFileSync(archivo, JSON.stringify( data ));

}


const leerDB = () => {

    if ( !fs.existsSync(archivo) ){
        return null
    }


    const info = fs.readFileSync( archivo, { encoding: 'utf-8' } );

    //.- transforma el String  a un formato JSON 
    const data = JSON.parse(info)
    //console.log(data)
    

    return data


}


module.exports = {
    guardarDB,
    leerDB
}




