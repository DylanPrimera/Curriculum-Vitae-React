import React from 'react';
import'../components/styles/nav.css'
import Slider from '../components/slider'
class nav extends React.Component{
    render(){
        return<div className="principal">
                <nav className="nab">

                    <div className="menu2">
                        <ul>

                            <li><a href="#estudios">ESTUDIOS</a></li>
                            <li><a href="#expe">EXPERIENCIA</a></li>
                            <li><a href="#con">CONTACTO</a></li>
                        </ul>
                    </div>
                </nav>
                <div><Slider /></div> 
        </div>
    }
}
export default nav;
