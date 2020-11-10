import React, {useState} from 'react';
import './Tarea.scss';

const Tarea = props => {

    return (<li className="tareilla">
                <span>{props.descripcion}</span>
                <span className="btnBorraTarea" onClick={() => props.borraTarea(props.index)}>X</span>
             </li>
    )
}

export default Tarea;