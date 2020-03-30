import React from 'react'
import Corr from './icons/mail.png'
import Cell from './icons/celular.png'
import '../components/styles/conta.css'
class contacto extends React.Component{
    render(){
        return <div className="container">
                <div name="cont" id="con" className="contacto">
                    <div className="corr">
                        <img id="corr" src={Corr} alt="email"></img>
                        <p>example@mail.com</p>
                    </div>
                    <div className="num">
                        <img  id="num" src={Cell} alt="celular"></img>
                        <p>555-555-555</p>
                    </div>
            </div>
        </div>
    }
}
export default contacto;