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

    borrarTarea (id = ''){

        if(this._listado[id]){
            delete this._listado[id];
        }

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
                    console.log(`${(contador + '.').green} ${desc} :: ${completadoEn.green}`);
                    
                }
            }else{
                if (!completadoEn) {
                    contador += 1;
                    console.log(`${(contador + '.').red} ${desc} :: ${estado}`);
                    
                }
                
            }

        })
    }




    /***
     * este metodo se encagarga de cambiar las tareas 
     * de forma "completa o pendiente"
     */
    toggleCompletadas(ids = []){

        ids.forEach(id => {

            const tarea = this._listado[id];
            if (!tarea.completadoEn) {
                tarea.completadoEn = new Date().toISOString(); //genera la fecha completamente
            }
        });

        //.- si se selecciona una tarea en completadas y pasa a no completadas .-//
        this.listadoArr.forEach(tarea => {

            if (!ids.includes(tarea.id)) {//pregunto si existe o incluye la tarea.id que se encuentra registrada

                // const tarea = this._listado[id];
                // tarea.completadoEn = null;
                this._listado[tarea.id].completadoEn = null
            }


        })

    }

    
    
}



module.exports = Tareas;