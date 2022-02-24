import React from 'react';
import {Link} from 'react-router-dom';
import boton_regresar from '../assets/boton_regresar.png';
import noticia from '../assets/noticias.jpeg';
import '../styles/AgregarNot.css';
import Header from '../Header';

const Agregar = () =>{
    return (
        <>  
            <Header/>
            
            <div>
                <div className="btn-container">
                    <div className="regresar-btn-os">
                        <Link to="/noticias">
                            <img src={boton_regresar} alt="regresar"></img>
                            <h2>Noticias</h2>
                        </Link>
                    </div>
                </div>
                <div className="noticiaContainer">
                    <div className="mini-noticiacontainer">
                        <img src={noticia} alt="noticia"></img>
                        <div className="texto-container">
                            <input placeholder="Antetítulo"></input>
                            <input placeholder="Título"></input>
                            <input placeholder="Subtítulo"></input>
                        </div>
                    </div>
                    <textarea name="message"></textarea>
                    <div className="button-container">
                        <button>Publicar</button>
                    </div>
                        
                    
                </div>
                <br/>
            </div>
        </>
    )
}

export default Agregar;