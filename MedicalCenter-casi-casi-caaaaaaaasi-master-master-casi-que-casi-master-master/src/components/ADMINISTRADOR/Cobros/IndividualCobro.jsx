import React, { useEffect, useState } from 'react';


const IndividualCobro = ({id, monto, setDataCobros, dataCobros}) => {


    const [cobrosHistoria, setCobrosHistoria] = useState();

    const handleClick = async () => {

        await fetch(`http://localhost:4000/turnouptransaccionfalse/${id}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"}
        });
        window.location.href = '/';
        
    }

    const getTurnosHistoria = async () => {
        const res = await fetch(`http://localhost:4000/turnoshistoria/${id}`);
        const data = await res.json();
        setCobrosHistoria(data[0]);
    }

    useEffect(() => {
        getTurnosHistoria();
    }, []);

    console.log(cobrosHistoria);

    return (
        <div className="super-os-container">
            <div className="OS-container">
                <div className="info-container">
                    <h2>ID Transaccion: {id}</h2>
                    <h2>Monto: ${monto}</h2>
                </div>
                <div className="super-btn-container">
                    <div className="btn-container-os">
                        {cobrosHistoria === undefined && <button onClick={handleClick} className="os-btn">Reintegrar</button>}
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default IndividualCobro;