import React from 'react';
import {Link} from 'react-router-dom';
import boton_regresar from '../assets/boton_regresar.png';
import IndividualCobro from './IndividualCobro';


const CyR = () => {
    return (
        <>
            <div className="btn-container-admin">
                <div className="regresar-btn-os-admin">
                    <Link to="/">
                        <img src={boton_regresar} alt="regresar"></img>
                        <h2>Regresar</h2>
                    </Link>
                </div>

    
            </div>
            
            <div className="main-container">

                <div className="list-container">
                    <section>
                        <IndividualCobro/>
                        <IndividualCobro/>
                        <IndividualCobro/>
                    </section>
                </div>
            </div>
        </>
    );
}
 
export default CyR;