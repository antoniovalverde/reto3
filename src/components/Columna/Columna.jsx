import React, {useState} from 'react';
import './Columna.scss';

const Columna = props => {
    const [coltitulo, setColtitulo] = useState(props.titulo);

    return (<div className="columna">
                <span className="titulo">{coltitulo}</span>
                <ul className="containerTask"></ul>
                <button>Eliminar</button>
             </div>
    )
}
export default Columna;