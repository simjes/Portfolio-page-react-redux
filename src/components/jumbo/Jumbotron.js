import React, {Component} from 'react';
import { Parallax, Background } from 'react-parallax';
import JumboPicture from './newpara.png';
import './Jumbotron.css';

class Jumbotron extends Component {
    render() {
        return (
            <div>
                <Parallax strength={300} className="jumbo">
                    <Background className="jumbo-bg">
                        <img src={JumboPicture} alt="parallax-img" className="jumbo-img"/>
                    </Background>
                    <div className="jumbo-text">
                        <h1>Simon Jespersen</h1>
                        <h3 className="jumbo-sub-text">Master student @ UiO</h3>
                    </div>
                </Parallax>
            </div>
        );
    }
}

export default Jumbotron;