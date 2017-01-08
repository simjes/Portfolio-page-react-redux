import React, {Component} from "react";
import './Project.css';

class Project extends Component {
    render() {
        return (
            <div className="card-box">
                <img className="project-image" alt={this.props.title} src={this.props.metadata.thumbnail} />
                <p>{this.props.title}</p>
            </div>
        );
    }
}

export default Project;