import React from 'react';
import {Link} from 'react-router-dom';
import boton_regresar from '../assets/boton_regresar.png';
import boton_agregar from '../assets/boton_agregar.png';
import '../styles/HomeOS.css';
import '../styles/Noticias.css';
import imagenNoticia from '../assets/noticias.jpeg';


const Noticia = () => {
    return(
        <>
            <div className="btn-container">
                <div className="regresar-btn-os">
                    <Link to="/">
                        <img src={boton_regresar} alt="regresar"></img>
                        <h2>Regresar</h2>
                    </Link>
                </div>

                <div className="agregar-btn">
                    <Link to="/noticias/agregarnoticia">
                        <h2>Agregar Noticia</h2>
                        <img src={boton_agregar} alt="agregar"></img>
                    </Link>
                </div>
            </div>
            <div className="container-news">
                <div className="card-news">
                    <img src={imagenNoticia} alt="imagenNoticia" />
                    <div className="text-container">
                        <h3>Titulo de noticia</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, sint ullam. Magnam, minima quaerat, deleniti tenetur dolore facere consequuntur ipsam Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus eveniet sint assumenda, doloribus ipsa quis excepturi pariatur! Optio et ipsam tempore libero corrupti reiciendis tempora voluptatum suscipit ratione consequatur! Accusamus.</p>
                        <div className="boton">
                            <button>Editar</button>
                            <button>Eliminar</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Noticia;