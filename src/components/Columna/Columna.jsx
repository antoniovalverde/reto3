import React, {useState} from 'react';
import './Columna.scss';

const Columna = ({titulo, indice, borraColumna}) => {

    return (<div className="columna">
                <span className="titulo">{titulo}</span>
                <ul className="contenedorMensajes"></ul>
                <button onClick={() => borraColumna(indice)}>Eliminar</button>
             </div>
    )
}
export default Columna;