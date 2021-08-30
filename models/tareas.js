const Tarea = require('./tarea');
/**
 * _listado:
 * { 'uuid-1231231221: {id:12 , dec:asda, completadoEn:3123}  ' },
 */

class Tareas {

    _listado = {};

    //.- Transforma objeto a un arreglo .-//
    get listadoArr (){

        const listado = [];

        //.- trae un arreglo de todas las llaves .-//
        Object.keys(this._listado).forEach( key => {

            //inserto las tareas al listado[]
            const tarea = this._listado[key];
            listado.push(tarea);
        } );

        return listado

    }

    constructor(){
        this._listado = {};
    }


    crearTarea( desc = '' ){

        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;

    }
    
}



module.exports = Tareas;