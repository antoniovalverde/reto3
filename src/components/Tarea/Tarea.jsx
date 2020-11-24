import React from 'react';
import './Tarea.scss';

const Tarea = props => {
    //DRAG AND DROP SIN LIBRERIAS EN REACT
    const onDragStart = (evento, descripcion, index, col) => {
        //console.log('dragstart: ', descripcion)
        evento.dataTransfer.setData("descripcion", descripcion)
        evento.dataTransfer.setData("ind", index)
        evento.dataTransfer.setData("col", col)
    }

    return (<li className="tareilla" key={props.descripcion} draggable onDragStart={(evento) => onDragStart(evento, props.descripcion, props.index, props.col)}>
                <span>{props.descripcion}</span>
                <span className="btnBorraTarea" onClick={() => props.borraTarea(props.index, props.col)}>X</span>
             </li>
    )
}

export default Tarea;