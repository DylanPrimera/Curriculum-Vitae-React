import React from 'react';
import Navbar from '../components/nav'
import Estudios from '../components/estudios'
import Experiencia from '../components/experiencia'
import Contacto from '../components/contacto'
import Futer from '../components/futer'
import '../components/styles/pagina.css'
class pagina_personal extends React.Component{
    render(){
        return( <div >
            <div><Navbar /></div>
            <div><Estudios /></div>
            <div><Experiencia /></div>
            <div><Contacto /></div>
            <div><Futer /></div>
            </div>);   
        
    }
}
export default pagina_personal;