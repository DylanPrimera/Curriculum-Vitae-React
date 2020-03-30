import React from 'react';
import'../components/styles/estudi.css'
class estudios extends React.Component{
    render(){
        return <div className="cont">
            <div name="estudios" id="estudios" className="estudi">
                <div id="t1">
                    <h1><b>Estudios Primarios</b> </h1>
                    <p>Desde que empecé el colegio estudié en el Instituto Cristiano Nuevo Amanecer hasta primero de
                        primaria.
                        Luego cuando iba a pasar a segundo empecé en el Colegio Militar Almirante Colón.
                    </p>
                </div>
                <div id="t2">
                    <h1>Estudios Secundarios</h1>
                    <p>Continué desde primaria hasta todo el bachillerato en el Colegio Militar Almirante Colón.</p>
                </div>
                <div id="t3">
                    <h1>Estudios Universitarios</h1>
                    <p>Ingresé a la Universidad Tecnológica de Bolívar un año despues de graduarme, actualmente estoy en 8vo
                        semestre
                        de Ingeniería de Sistemas y Computación.
                    </p>
                </div>
            </div>
        </div>
    }
}
export default estudios;