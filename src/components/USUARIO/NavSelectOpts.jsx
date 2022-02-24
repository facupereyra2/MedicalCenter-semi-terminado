import React from 'react';
import { Link } from "react-router-dom";
import './styles/NavSelectOpts.css';


const SelectOpt = () => {


    return (
        <>
            <div className="container-main-selectHC">
                <div className="container-buttonHC">
                    <Link to="/">
                        <button><i class="fas fa-chevron-left"></i> Historia clínica</button>
                    </Link>
                </div>
        
            </div>
        </>
    );
}
 
export default SelectOpt;