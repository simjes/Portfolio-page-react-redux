import React, {Component} from "react";

class ProjectDetails extends Component {
    render() {
        const i = this.props.data.projects.findIndex(project => project._id === this.props.params.projectId);

        return (
            <div>
                index is: {i}
                this is project details
            </div>
        );
    }
}

export default ProjectDetails;