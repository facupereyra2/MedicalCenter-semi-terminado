import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import boton_regresar from '../assets/boton_regresar.png';
import boton_agregar from '../assets/boton_agregar.png';
import IndividualMed from './IndividualMed';
import MedChecker from './MedChecker';
import '../styles/Meds.css';

const HomeMed = () => {


    // Mostrar verificación previa a agregar un médico
    const [form, setForm] = useState(false);


    // Hook para guardar los datos de los médicos
    const [medicos, setMedicos] = useState([]);
    const [tablaMedicos, setTablaMedicos] = useState([]);


    const cargarMedicos = async () => {
        const res = await fetch('http://localhost:4000/medicos');
        const data = await res.json();
        setMedicos(data);
        setTablaMedicos(data);
    }

    console.log(medicos);

    useEffect(() => {
        cargarMedicos();
    }, [])

    

    //Filtro dinámico para la barra de búsqueda

    const handleInputChange = (e) =>{
        
        filtrar(e.target.value);
    }

    const filtrar = (search) => {
        let resultado = tablaMedicos.filter( elemento => {
            if(elemento.nombre.toString().toLowerCase().includes(search.toLowerCase())
                || elemento.apellido.toString().toLowerCase().includes(search.toLowerCase())
            ){
                return elemento;
            }
        });
        setMedicos(resultado);
    }


    return (
        <>
            <div className="btn-container">
                <div className="regresar-btn-os">
                    <Link to="/">
                        <img src={boton_regresar} alt="regresar"></img>
                        <h2>Regresar</h2>
                    </Link>
                </div>

                <input
                    type="text"
                    name="medico"
                    id="medico"
                    placeholder="Buscar médico"
                    className="med-input"
                    onChange={handleInputChange}
                >
                </input>

                <div className="agregar-btn-med" onClick={() => setForm(!form)}>
                    <h2>Agregar Médico</h2>
                    <img src={boton_agregar} alt="agregar"></img>
                </div>
            </div>

            
            
            <div className="main-container">
                <div className="filter-container">
                    <h2>Filtros</h2>
                    <select name="filtro 1" className="filter">
                        <option>Especialidad</option>
                        <option value="opcion 1">Opción 1</option>
                        <option value="opcion 2">Opción 2</option>
                        <option value="opcion 3">Opción 3</option>
                    </select>

                    <select name="filtro 2" className="filter">
                        <option value="opcion 1">Opción 1</option>
                        <option value="opcion 2">Opción 2</option>
                        <option value="opcion 3">Opción 3</option>
                    </select>

                    <select name="filtro 3" className="filter">
                        <option value="opcion 1">Opción 1</option>
                        <option value="opcion 2">Opción 2</option>
                        <option value="opcion 3">Opción 3</option>
                    </select>

                    <select name="filtro 4" className="filter">
                        <option value="opcion 1">Opción 1</option>
                        <option value="opcion 2">Opción 2</option>
                        <option value="opcion 3">Opción 3</option>
                    </select>

                    <select name="filtro 5" className="filter">
                        <option value="opcion 1">Opción 1</option>
                        <option value="opcion 2">Opción 2</option>
                        <option value="opcion 3">Opción 3</option>
                    </select>
                </div>

                {form && <MedChecker/>}

                <div className="list-container">
                    <section>

                        {
                            medicos.map( med => {
                                return <IndividualMed
                                            medico_obj={med}
                                            key={med.dni}
                                            medicos={medicos}
                                            setMedicos={setMedicos}
                                        />
                            })
                        }

                    </section>
                </div>
            </div>
            
        </>
    );
}
 
export default HomeMed;