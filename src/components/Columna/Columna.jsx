import React, {useState} from 'react';
import './Columna.scss';
import Tarea from '../Tarea/Tarea';


/* En un principio, el componente Pizarra pintaba las columnas con este componente, y este a su vez llamaba al componente Tarea
    para hacer lo propio. El paso datos entre componentes es bastante problemático y si bien se ve muy ordenado el componente
    principal, entiendo que no vale la pena por el costo en problemas y código. De ahí entiendo que sale Redux, para paliar
    estos temas. Como no he implementado la aplicación con Redux (espero que para la próxima si lo haga) he decidido dejar
    este componente, como estaba planteado, para consulta, aunque no será utilizado en la aplicación
*/

const Columna = props => {
    const [task, setTask] = useState({});
    const [listatareas, setListatareas] = useState([]);

    const handleChangeT = e => setTask({idl: props.idc , [e.target.name]: e.target.value}) 
    
    const handleClickT = e => {
        if(Object.keys(task).length === 0 || task.descripcion.trim() === '') {
            return
        }
        setListatareas([...listatareas, task])
        setTask({task: ''})
    }

    const borraTarea = index => {
        const resetlistatareas = [...listatareas]
        resetlistatareas.splice(index, 1)
        setListatareas(resetlistatareas)
    }
    //PRUEBAS PARA DRAG AND DROP SIN LIBRERIAS EN REACT
    /*const onDragOver = (ev) => {
        ev.preventDefault();
    }
    //PRUEBAS PARA DRAG AND DROP SIN LIBRERIAS EN REACT
    const onDrop = (ev) => {
        setListatareas([...listatareas, {descripcion: ev.dataTransfer.getData("descripcion")}])
    }*/

    return (<div className="columna">
                <div className="titular">
                    <span className="titulo">{props.titulo}</span>
                    <span className="btnBorrado" onClick={() => props.borraColumna(props.indice)}>X</span>
                </div>
                {/*//PRUEBAS PARA DRAG AND DROP SIN LIBRERIAS EN REACT*/}
                {/*<ul className="contenedorMensajes" onDragOver={(evento) => onDragOver(evento)} onDrop={(evento) => onDrop(evento)}>*/}
                <ul className="contenedorMensajes">
                {
                    /*props.estado.map((tareilla, index) => (
                     
                        
                        <Tarea descripcion={tareilla.descripcion} key={index} index={index} borraTarea={borraTarea} />
                    ))*/

                     listatareas.filter((poom) => poom.idl === props.idc).map((tareilla, index) => (
                        <Tarea descripcion={tareilla.descripcion} key={index} index={index} borraTarea={borraTarea} />
                     ))
                }
                </ul>
                <div className="frm">
                    <input type="text" id="descripcion" colu={props.idc} name="descripcion" value={task.task} placeholder="Indica la tarea..." onChange={handleChangeT} />
            <span onClick={handleClickT}>+</span>
                </div>
             </div>
    )
}
export default Columna;