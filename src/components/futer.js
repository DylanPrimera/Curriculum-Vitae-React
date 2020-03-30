import React from 'react'
import Feisbul from './icons/feisbu.png'
import listagram from './icons/istagram.png'
import Tuita from './icons/tuitter.png'
import '../components/styles/furer.css'
class futer extends React.Component{
    render(){
        return <div>
                <footer>
                    <div className="futer">
                        <div>
                            <a href="https://www.facebook.com/Dylan.Primera" target="blank"><img className="feis"
                                    src={Feisbul}></img></a>
                        </div>
                        <div>
                            <a href="https://www.instagram.com/dyylan.jpg/" target="blank"><img className="insta"
                                    src={listagram}></img></a>
                        </div>
                        <div>
                            <a href="https://twitter.com/DylanPrimera" target="blank"><img className="tuita"
                                    src={Tuita}></img></a>
                        </div>
                    </div>
            </footer>
        </div>
    }
}
export default futer;
