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
            <div id="card-columns">
                <Row debug alignContent="center">
                    {this.props.projects.map( project => {
                        return (
                            <Column key={project._id} xs={12} sm={6} md={4} lg={3}>
                                <Project {...project}/>
                            </Column>
                        )
                    })}
                </Row>
            </div>
        );
    }
}

export default ProjectsOverview;