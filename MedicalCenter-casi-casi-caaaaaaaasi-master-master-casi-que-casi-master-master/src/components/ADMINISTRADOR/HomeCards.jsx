import React from 'react'
import {Link} from 'react-router-dom';

const HomeCards = () => {
    return (
        <div className="grid-container">
            <div className="cards-container">
                <div className="little-card-container">

                    <Link to="/medicos">
                        <div className="card">
                            <h2>Médicos</h2>
                        </div>
                    </Link>

                    <Link to="/mensajes">
                        <div className="card">
                            <h2>Enviar Mensaje</h2>
                        </div>
                    </Link>
    
                    <Link to="/noticias">
                        <div className="card">
                            <h2>Noticias</h2>
                        </div>
                    </Link>

                </div>
    
                <Link to="/obra-social">
                    <div className="card2">
                        <h2>Administrar Obras Sociales</h2>
                    </div>
                </Link>

                <Link to="/cobros">
                    <div className="card2">
                        <h2>Cobros y Reintegros</h2>
                    </div>
                </Link>

            </div>
        </div>
    );
}
 
export default HomeCards;