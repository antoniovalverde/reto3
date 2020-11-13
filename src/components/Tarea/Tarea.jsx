import React, {useState} from 'react';
import './Tarea.scss';

const Tarea = props => {
    //PRUEBAS PARA DRAG AND DROP SIN LIBRERIAS EN REACT
    /*const onDragStart = (evento, descripcion, index) => {
        console.log('dragstart: ', descripcion)
        evento.dataTransfer.setData("descripcion", descripcion)
        evento.dataTransfer.setData("ind", index)
    }*/
    // <li className="tareilla" key={props.descripcion} draggable onDragStart={(evento) => onDragStart(evento, props.descripcion, props.index)}>
return (<li className="tareilla">
                <span>{props.descripcion}</span>
                <span className="btnBorraTarea" onClick={() => props.borraTarea(props.index)}>X</span>
             </li>
    )
}

export default Tarea;