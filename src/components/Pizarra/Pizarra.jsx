import React, {useState} from 'react';
import './Pizarra.scss';
import Columna from '../Columna/Columna';

const Pizarra = props => {
    const [title, setTitle] = useState({});
    const [listacol, setListacol] = useState([]);

    const handleChange = e => setTitle({[e.target.name]: e.target.value})
    
    const handleClick = e => setListacol([...listacol, title])

    const borraColumna = indice => {
        const resetlistacol = [...listacol]
        resetlistacol.splice(indice, 1)
        setListacol(resetlistacol)
    }

    return (
                <div className="board">
                {
                    listacol.map((titulillo, indice) => (
                       <Columna titulo={titulillo.title} key={indice} indice={indice}  borraColumna={borraColumna} /> 
                    ))
                }
                        <div className="we">
                            <input type="text" id="title" name="title" placeholder="Nombre de la lista..." onChange={handleChange} />
                            <button onClick={handleClick}>Crear Lista</button>
                        </div>
                </div>
    )
}
export default Pizarra;