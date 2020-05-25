import React, {Component} from 'react';

import axios from 'axios';

import SkillList from './SkillList';

class Skills extends Component {
    state = {
        skills: []
    }

    componentDidMount () {
        axios.get('http://localhost:8080/api/skill')
            .then(response => {
                const skills  = response.data.skills;
                this.setState({skills: skills});
            })
            .catch(error => {
                console.log(error);
            });
    }

    render () {
         return(
            <React.Fragment>
                <SkillList skills={this.state.skills} added={this.props.added} showButtons={this.props.showButtons} />
            </React.Fragment>
        )
    }
}

export default Skills;