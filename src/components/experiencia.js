import React from 'react'
import Cmas from './icons/cmas.png'
import Pyth from './icons/python.png'
import Jav from './icons/java.png'
import'../components/styles/expe.css'
class experiencia extends React.Component{
    render(){
        return <div className="container">
                <div name="expe" id="expe" class="experiencia">
                    <div className="labo">
                        <h1>Experiencia Laboral</h1>
                        <p>Trabajé durante 8 meses siendo asistente de un diseñador gráfico, le ayudaba con sus diseños en
                            Photoshop CS3 y crear albumes de graduación.
                        </p>
                    </div>
                    
                    <div className="progra">
                        <h1>Experiencia Con Lenguajes</h1>
                        <div className="cmas">
                            <img id="cmas" src={Cmas}></img>
                            <p>Con este lenguaje he hecho programas con operaciones matemáticas, es un lenguaje
                                con el que he estado bastante familiarizado durante la carrera.</p>
                        </div>
                        <div className="pyt">
                            <img id="pyt" src={Pyth}></img>
                            <p>Este lenguaje de programación lo he trabajado durante casi toda mi carrera, desde programas
                                sencillos,
                                hasta programas más complejos, tambien he trabajado con el framework minimalista de Python el
                                cuál es Flask.</p>
                        </div>
                        <div className="jav">
                            <img id="jav" src={Jav}></img>
                            <p>Realicé un diplomado durante 5 semanas con este lenguaje, el diplomado era muy básico. No pude
                                obtener el
                                certificado por falta de dinero, pero considero que sé lo más básico de este lenguaje.
                            </p>
                        </div>
                    </div>
            </div>
        </div>
    }
}
export default experiencia;