import React from "react";
import CardProfesionals from "../../components/USUARIO/CardProfesional";
import Footer from "../../components/USUARIO/Footer";
import HeaderFuncional from "../../components/USUARIO/HeaderFuncional";
import NavVolverProf from "../../components/USUARIO/NavVolverProf";
import './styles/Profesionals.css';

export default function Profesionals() {
    return(
        <>
            <HeaderFuncional />
            <br />
            <NavVolverProf />
            <div className="container">
                <CardProfesionals/>
            </div>
            <br /> <br />
            <Footer />
        </>
    )
    
    
}