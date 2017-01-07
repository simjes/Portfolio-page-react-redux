import React, {Component} from 'react';
import { Parallax } from 'react-parallax';
import JumboPicture from './parallaxpicture.png';
import './Jumbotron.css';

class Jumbotron extends Component {
    render() {
        return (
            <div >
                <Parallax bgImage={JumboPicture} strength={400} className="jumbo">
                    <h1>Simon Jespersen</h1>
                </Parallax>
            </div>
        );
    }
}

export default Jumbotron;