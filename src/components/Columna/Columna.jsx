import React, {useState} from 'react';
import './Columna.scss';
import Tarea from '../Tarea/Tarea';

const Columna = props => {
    const [task, setTask] = useState({});
    const [listatareas, setListatareas] = useState([]);

    const handleChangeT = e => setTask({[e.target.name]: e.target.value}) 
    
    const handleClickT = e => {
        if(Object.keys(task).length === 0 || task.descripcion.trim() === '') {
            return
        }
        setListatareas([...listatareas, task])
    }

    const borraTarea = index => {
        const resetlistatareas = [...listatareas]
        resetlistatareas.splice(index, 1)
        setListatareas(resetlistatareas)
    }

    return (<div className="columna">
                <span className="titulo">{props.titulo}</span>
                <div className="frm">
                    <input type="text" id="descripcion" name="descripcion" placeholder="Indica la tarea..." onChange={handleChangeT} />
                    <span onClick={handleClickT}>+</span>
                </div>
                <ul className="contenedorMensajes">
                {
                    listatareas.map((tareilla, index) => (
                        <Tarea descripcion={tareilla.descripcion} key={index} index={index} borraTarea={borraTarea} />
                    ))
                }
                </ul>
                <button className="btnBorrado" onClick={() => props.borraColumna(props.indice)}>Eliminar</button>
             </div>
    )
}
export default Columna;