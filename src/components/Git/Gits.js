import React, {Component} from 'react';

import axios from 'axios';

import GitList from './GitList';

class Gits extends Component {
    state = {
        gits: []
    }

    componentDidMount () {
        axios.get('http://localhost:8080/api/git')
            .then(response => {
                const gits  = response.data.gits;
                this.setState({gits: gits});
            })
            .catch(error => {
                console.log(error);
            });
    }

    render () {
         return(
            <React.Fragment>
                <GitList gits={this.state.gits} added={this.props.added} showButtons={this.props.showButtons} />
            </React.Fragment>
        )
    }
}

// const gits = props => {
//     const [loadedgits, setLoadedgits] = useState();

//     return(
//         <React.Fragment>
//             <GitList gits={props.gits} added={props.added} />
//         </React.Fragment>
//     )
// }

export default Gits;