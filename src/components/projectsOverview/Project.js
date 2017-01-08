import React, {Component} from "react";
import './Project.css';
import {Link} from 'react-router';

class Project extends Component {
    render() {
        return (
            <div className="card-box">
                <Link to={`/view/${this.props._id}`}>
                    <img className="project-image" alt={this.props.title} src={this.props.metadata.thumbnail} />
                </Link>
                <p>{this.props.title}</p>
            </div>
        );
    }
}

export default Project;