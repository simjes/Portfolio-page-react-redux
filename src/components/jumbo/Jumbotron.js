import React, {Component} from 'react';
import { Parallax } from 'react-parallax';
import JumboPicture from './parallaxpicture.png';
import './Jumbotron.css';

class Jumbotron extends Component {
    render() {
        return (
            <Parallax bgImage={JumboPicture} strength={300} className="jumbo">
                <div className="jumbo-text">
                    <h1>Simon Jespersen</h1>
                    <h3>Master student @ UiO</h3>
                </div>
            </Parallax>
        );
    }
}

export default Jumbotron;