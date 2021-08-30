const Tarea = require('./tarea');
const inquirer = require('inquirer')
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


    cargarTareasFromArray ( tareas = [] ){
        tareas.forEach( tarea => {
            this._listado[tarea.id] = tarea;
        } )
    }



    crearTarea( desc = '' ){

        const tarea = new Tarea(desc);
        this._listado[tarea.desc] = tarea;

    }

    listadoCompleto(){
    
        this.listadoArr.forEach((tarea, id) => {
            console.log();
            const idx = `${id + 1}`.green;
            const {desc, completadoEn } = tarea;
            const estado = (completadoEn) ? 'Completada'.green : 'Pendiente'.red;

            console.log(`${idx} ${desc} :: ${estado}`);
        });
    }

    listarPendientesCompletadas(completadas = true){

        
        console.log();
        let contador = 0;
        this.listadoArr.forEach(tarea => {

            
            const {desc, completadoEn} = tarea;
            const estado = (completadoEn) ? 'Completada'.green : 'Pendiente'.red;
            

            if (completadas) {
                if (completadoEn) {
                    contador += 1;
                    console.log(`${(contador + '.').green} ${desc} :: ${estado}`);
                    
                }
            }else{
                if (!completadoEn) {
                    contador += 1;
                    console.log(`${(contador + '.').red} ${desc} :: ${estado}`);
                    
                }
                
            }

        })

        

    }

    
    
}



module.exports = Tareas;