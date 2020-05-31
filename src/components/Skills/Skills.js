import React, {Component} from 'react';

import SkillList from './SkillList';

class Skills extends Component {

    render () {
         return(
            <React.Fragment>
                <SkillList skills={this.props.skills} added={this.props.added} showButtons={this.props.showButtons} />
            </React.Fragment>
        )
    }
}

export default Skills;