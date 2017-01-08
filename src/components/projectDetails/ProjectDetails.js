import React, {Component} from "react";
import CircularProgress from 'material-ui/CircularProgress';
import Chip from 'material-ui/Chip';
import './ProjectDetails.css';
import {redA700, deepPurpleA700, green900, deepOrangeA700, brown900} from 'material-ui/styles/colors';

class ProjectDetails extends Component {


    constructor(props) {
        super(props);
        this.getChipColor = this.getChipColor.bind(this);
        //this.clickChipEvent = this.clickChipEvent.bind(this);
    }

    componentDidMount() { //do i need this? probably
        if (this.props.data.projects.length === 0) {
            this.props.getAllProjects();
        }
    }

    clickChipEvent(link) {
        window.open(link,"_blank")
    }

    getChipColor(linkto) {
        switch (linkto) {
            case "Youtube":
                return redA700;
            case "Github":
                return deepPurpleA700;
            case "Webpage":
                return deepOrangeA700;
            case "Android":
                return green900;
            case "Launchpad":
                return brown900;
        }
    }

    render() {
        const i = this.props.data.projects.findIndex(project => project._id === this.props.params.projectId);
        const project = this.props.data.projects[i];

        return (
            <div className="project-details">
                {this.props.data.isFetching ? (<CircularProgress size={80} thickness={10} />) : null}
                {this.props.data.doneLoading ? (
                    <div>
                        <h2>{project.title}</h2>
                        {project.metadata.links.map((link, i) => {
                            return (
                                <div key={i} className="project-links" >
                                        <Chip backgroundColor={this.getChipColor(link.linkto)} onTouchTap={this.clickChipEvent.bind(null, link.url)}>
                                            {link.linkto}
                                        </Chip>
                                </div>
                            )
                        })}
                        <p className="project-details-description">{project.metadata.description}</p>
                        <img className="project-details-image" src={project.metadata.image} />
                    </div>
                    ) : null}

            </div>
        );
    }
}

export default ProjectDetails;