import React from 'react';
import { Link } from 'react-router-dom';

const IndividualOS = ({obra, setObras, obras}) => {

    const { id, nombre, porcentajecobertura } = obra;

    const handleDelete = async (id) => {
        await fetch(`http://localhost:4000/obra-social/${id}`, {
            method: 'DELETE'
        });

        setObras(obras.filter( (obra) => obra.id !== id))
    }
    
    return (
        <div className="super-os-container">
            <div className="OS-container">
                <div className="info-container">
                    <h2>{nombre}</h2>
                    <h2>Cobertura: {porcentajecobertura}%</h2>
                </div>
                <div className="super-btn-container">
                    <div className="btn-container-os">
                        <Link to={`editar/${id}`}>
                            <button className="os-btn">Editar</button>
                        </Link>
                        <button className="os-btn" onClick={() => handleDelete(id)}>Eliminar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IndividualOS;