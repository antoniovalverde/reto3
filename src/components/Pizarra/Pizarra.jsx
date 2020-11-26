import React, {useState} from 'react';
import './Pizarra.scss';
import '../Columna/Columna.scss';
import Tarea from '../Tarea/Tarea';

const Pizarra = props => {
    const [title, setTitle] = useState({});
    const [listacol, setListacol] = useState([]);
    const [task, setTask] = useState([]);

    const handleChange = e => setTitle({[e.target.name]: e.target.value, tasks: []})

    const handleClick = e => {
        if(Object.keys(title).length === 0 || title.title.trim() === '') {
            return
        }
        setListacol([...listacol, title])
        setTitle({title: ''})
    }

    const borraColumna = indice => {
        const resetlistacol = [...listacol]
        resetlistacol.splice(indice, 1)
        setListacol(resetlistacol)
    }

    const handleChangeT = e => {
        setTask([e.target.name, e.target.value]) 
    }
    const handleClickT = indice => {
        // eslint-disable-next-line
        if(indice != task[0] || task[1].trim() === '') {
            //Object.keys(task)[0].length === 0
            return
        }
        let nuevalista = [...listacol];
        //console.log(indice)
        nuevalista[indice].tasks.push(task[1]);
        setListacol(nuevalista)
        setTask('')
    }

    const borraTarea = (index, indice) => {
        const resetlistatareas = [...listacol]
        resetlistatareas[indice].tasks.splice(index, 1)
        setListacol(resetlistatareas)
    }

    //DRAG AND DROP SIN LIBRERIAS EN REACT
    const onDragOver = (ev) => {
        ev.preventDefault();
    }

    const onDrop = (ev, indi) => {
        const resetlistatareas = [...listacol]
        resetlistatareas[indi].tasks.push(ev.dataTransfer.getData("descripcion"))
        resetlistatareas[ev.dataTransfer.getData("col")].tasks.splice(ev.dataTransfer.getData("ind"), 1)
        setListacol(resetlistatareas)
        //console.log(listacol)
    }

    return (
                <div className="board">
                {
                    listacol.map((titulillo, indice) => (
                       /*<Columna titulo={titulillo.title} key={indice} idc={titulillo.id} indice={indice}  estado={listacol} borraColumna={borraColumna} /> */
                    <div key={indice} className="columna">
                       <div className="titular">
                           <span className="titulo">{titulillo.title}</span>
                           <span className="btnBorrado" onClick={() => borraColumna(indice)}>X</span>
                       </div>
                       <ul className="contenedorMensajes" onDragOver={(evento) => onDragOver(evento)} onDrop={(evento) => onDrop(evento, indice)}>
                       {
                            titulillo.tasks.map((tareilla, index) => (
                               <Tarea descripcion={tareilla} col={indice} key={index} index={index} borraTarea={borraTarea} />
                            ))
                       }
                       </ul>
                       <div className="frm">
                           {/* eslint-disable-next-line */}
                           <input type="text" id="descripcion" key={indice} colu={indice} name={indice} value={indice == task[0] ? task[1] : ''} placeholder="Indica la tarea..." onChange={handleChangeT} />
                            <span co={indice} onClick={() => handleClickT(indice)}>+</span>
                       </div>
                    </div>
                    ))
                }
                        <div className="we">
                            <input type="text" id="title" name="title" value={title.title} placeholder="Nombre de la lista..." onChange={handleChange} />
                            <span onClick={handleClick}>+</span>
                        </div>
                </div>
    )
}
export default Pizarra;