import React, {Component} from "react";
import {Row, Column} from "hedron";
import Project from './Project';
import CircularProgress from 'material-ui/CircularProgress';

class ProjectsOverview extends Component {

    componentDidMount() {
        if (this.props.data.projects.length === 0) {
            this.props.getAllProjects();
        }
    }

    render() {
        return (
            <div id="card-columns">
                {this.props.data.isFetching ? (<CircularProgress size={80} thickness={10} />) : null}
                <Row>
                    {this.props.data.projects.map( project => {
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