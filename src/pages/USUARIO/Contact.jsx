import React from "react";
import CardsContact from "../../components/USUARIO/CardsContact";
import FormContact from '../../components/USUARIO/FormContact';
import HeaderFuncional from '../../components/USUARIO/HeaderFuncional';
import Footer from '../../components/USUARIO/Footer';
import './styles/Contact.css';
import { Link } from "react-router-dom";

export default function Contact() {
    return(
        <div>
            <HeaderFuncional />
            <br />
            <div className="container-main-selectMT">
                <div className="container-button">
                    <Link to="/">
                        <button><i class="fas fa-chevron-left"></i> Contacto</button>
                    </Link>
                </div>
            </div>     
            <FormContact/>
            <CardsContact/>
            <Footer />
        </div>
    )
}