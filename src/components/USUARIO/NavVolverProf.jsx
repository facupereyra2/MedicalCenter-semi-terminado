import React from 'react';
import { Link } from "react-router-dom";

import './styles/NavVolverProf.css';

const NavVolverProf = () => {

    return ( 
        <>
            <div className="container-main-selectNV">
                <div className="container-buttonNV">
                    <div className="btn-back">
                        <Link to="/">
                            <button><i class="fas fa-chevron-left"></i> Profesionales</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default NavVolverProf;