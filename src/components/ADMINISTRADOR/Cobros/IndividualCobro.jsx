import React from 'react';
import { Link } from 'react-router-dom';

const IndividualCobro = () => {

    return (
        <div className="super-os-container-admin">
            <div className="OS-container-admin">
                <div className="info-container-admin">
                    <h2>Transacción</h2>
                    <h2>ID: </h2>
                </div>
                <div className="super-btn-container-admin">
                    <div className="btn-container-os-admin">
                        <Link to={`/`}>
                            <button className="os-btn-admin">Editar</button>
                        </Link>
                        <button className="os-btn-admin">Eliminar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default IndividualCobro;