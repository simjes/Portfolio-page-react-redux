import React, {Component} from "react";
import {Row, Column} from "hedron";
import Project from './Project';


class ProjectsOverview extends Component {


    constructor(props) {
        super(props);
        props.getAllProjects();
    }

    render() {
        return (
            <div>
                <Row>
                    {this.props.projects.map( project => {
                        return (
                            <Column key={project._id} sm={12} md={6} lg={4}>
                                <Project  {...project}/>
                            </Column> )
                    })}
                </Row>
            </div>
        );
    }
}

export default ProjectsOverview;