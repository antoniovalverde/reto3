import React, {useState} from 'react';
import './Pizarra.scss';
import Columna from '../Columna/Columna';

const Pizarra = props => {
    const [title, setTitle] = useState({});
    const [listacol, setListacol] = useState([]);

    const handleChange = e => setTitle({[e.target.name]: e.target.value})

    const handleClick = e => setListacol([...listacol, title])

    return (
                <div className="board">
                {
                    listacol.map((titulillo, indice) => (
                       <Columna titulo={titulillo.title} key={indice} /> 
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