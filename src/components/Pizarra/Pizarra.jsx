import React, {useState} from 'react';
import './Pizarra.scss';
import Columna from '../Columna/Columna';

const Pizarra = props => {
    const [title, setTitle] = useState({});
    const [listacol, setListacol] = useState([]);

    const handleChange = e => setTitle({[e.target.name]: e.target.value})

    const handleClick = e => {
        if(Object.keys(title).length === 0 || title.title.trim() === '') {
            return
        }
        setListacol([...listacol, title])
    }

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
                            <span onClick={handleClick}>+</span>
                        </div>
                </div>
    )
}
export default Pizarra;