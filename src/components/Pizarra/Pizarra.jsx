import React, {useState} from 'react';
import './Pizarra.scss';

const Pizarra = props => {
    const [listacol, setListacol] = useState([
        {id:1, title:"columna 1"},
        {id:2, title:"columna 2"},
        {id:3, title:"columna 3"}]);

    return (
                <div className="board">
                {
                    listacol.map((titulillo) => (
                        <div className="col">{titulillo.title}</div>))
                }
                        <div className="we">
                            <input type="text" placeholder="Nombre de la lista..." />
                            <button>Crear Lista</button>
                        </div>
                </div>
    )
}
export default Pizarra;