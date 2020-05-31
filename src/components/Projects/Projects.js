import React, {Component} from 'react';

import axios from 'axios';

import ProjectList from './ProjectList';

class Projects extends Component {
    state = {
        projects: []
    }

    componentDidMount () {
        axios.get(process.env.REACT_APP_BACKEND_URL + '/project')
            .then(response => {
                const projects  = response.data.projects;
                this.setState({projects: projects});
            })
            .catch(error => {
                console.log(error);
            });
    }

    render () {
         return(
            <React.Fragment>
                <ProjectList projects={this.state.projects} added={this.props.added} showButtons={this.props.showButtons} />
            </React.Fragment>
        )
    }
}

// const Skills = props => {
//     const [loadedSkills, setLoadedSkills] = useState();

//     return(
//         <React.Fragment>
//             <SkillList skills={props.skills} added={props.added} />
//         </React.Fragment>
//     )
// }

export default Projects;