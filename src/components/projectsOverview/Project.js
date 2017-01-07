import React, {Component} from "react";
import {Row, Column} from "hedron";
import './Project.css';

class Project extends Component {
    render() {
        return (
            <div className="project-container">
                <img className="project-image" src={this.props.metadata.image} />
                <p>{this.props.title}</p>
            </div>
        );
    }
}

export default Project;