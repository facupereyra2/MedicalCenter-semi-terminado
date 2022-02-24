import React, { useEffect, useState } from 'react';
import boton_regresar from './assets/boton_regresar.png';
import {Link} from 'react-router-dom';
import './styles/SendMensaje.css';



const SendMensaje = () => {


    // Hook para guardar el mensaje
    const [mail, setMail] = useState({
        nombre: '',
        message: ''
    })

    const handleChange = (e) => {
        setMail({ ...mail, [e.target.name]: e.target.value });
        filtrarMedicos(mail.nombre);
    }

    const filtrarMedicos = (search) => {
        let resultado = tablaMedicos.filter( elemento => {
            if(elemento.nombre.toString().toLowerCase().includes(search.toLowerCase())
                || elemento.apellido.toString().toLowerCase().includes(search.toLowerCase())
            ){
                return elemento;
            }
        });
        setMedicos(resultado);
    }


    // Hook para obtener los Médicos
    const [medicos, setMedicos] = useState([]);
    const [tablaMedicos, setTablaMedicos] = useState([]);
    

    const cargarMedicos = async () => {
        const res = await fetch('http://localhost:4000/medicos');
        const data = await res.json();
        setMedicos(data);
        setTablaMedicos(data);
    }

    if (medicos.length === 1) {
        mail.nombre = medicos[0].correoelectronico;
    }

    console.log("Medicos: ", medicos);
    console.log("mail: ", mail);

    useEffect(() => {
        cargarMedicos();
    }, [])

    return (
        <>
            <div className="regresar-btn">
                <Link to="/">
                    <img src={boton_regresar} alt="regresar"></img>
                    <h2>Regresar</h2>
                </Link>
            </div>

            <div className="message-super-container">
                <div className="message-form-container">
                    <h1>Enviar Mensaje</h1>

                    <form>
                        <div className="message-input-container">
                            <input
                                type="text" 
                                name="nombre"
                                id="nombre"
                                placeholder="Nombre del médico"
                                value={mail.nombre}
                                onChange={handleChange}
                            />

                            <textarea
                                    name="message"
                                    onChange={handleChange}
                            >

                            </textarea>

                            <button type="submit">
                                <h3>Enviar</h3>
                            </button>
                            
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
 
export default SendMensaje;