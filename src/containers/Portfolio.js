import React, { Component } from 'react';

import axios from 'axios';

import Aux from '../hoc/Auxillary/Auxillary';
import Modal from '../components/UIElements/Modal/Modal';
import MainNavigation from '../components/Navigation/MainNavigation';
import Banner from '../components/Banner/Banner';
import Skills from '../components/Skills/Skills';
import Projects from '../components/Projects/Projects';
import Gits from '../components/Git/Gits';
import NewBanner from '../components/Banner/NewBanner';
import NewSkill from '../components/Skills/NewSkill';
import NewProject from '../components/Projects/NewProject';
import NewGit from '../components/Git/NewGit';
import Footer from '../components/Footer/Footer';

import './Portfolio.css'

class Portfolio extends Component {
    state = {
        gits: [],
        banner_adding: false,
        skill_adding: false,
        project_adding: false,
        git_adding: false,
        banner: {},
        skills: [],
        show: true,
        showButtons: false
    }

    componentDidMount () {
        axios.get(process.env.REACT_APP_BACKEND_URL + '/banner')
            .then(response => {
                const banner  = response.data.banner;
                if (banner) {
                    this.setState({show: false});
                }
                
                this.setState({banner: banner});
            })
            .catch(error => {
                console.log(error);
            });

        axios.get(process.env.REACT_APP_BACKEND_URL + '/add')
            .then(response => {
                const add  = response.data.showButtons;
                const s_btn = add[0].adding;
                this.setState({showButtons: s_btn});
                console.log(this.state.showButtons);
            })
            .catch(error => {
                console.log(error);
            });

        axios.get(process.env.REACT_APP_BACKEND_URL + '/skill')
        .then(response => {
            const skills  = response.data.skills;
            this.setState({skills: skills});
        })
        .catch(error => {
            console.log(error);
        });
    }

/// SHOW ADD BUTTONS----------------------------------
    showButtonsHandler = async () => {
        const data = {
            adding: !this.state.showButtons,
        }
    
        try {
            await axios.patch(process.env.REACT_APP_BACKEND_URL + "/add", data)
        } catch (err) {
            console.log(err);
        }
    }


/// BANNER---------------------------------------------------

    bannerAddingHandler = () => {
        this.setState({banner_adding: true});
    }

    bannerCancelHandler = () => {
        this.setState({banner_adding: false});
    }
    
/// SKILLS-----------------------------------------------------

    addNewSkillHandler = newGoal => {
        this.setState(state => {
            const skills = state.skills.concat(newGoal);
            console.log(skills);
            return {
              skills
            };
        });
    };

    skillAddingHandler = () => {
        this.setState({skill_adding: true});
    }

    skillCancelHandler = () => {
        this.setState({skill_adding: false});
    }

// PROJECTS------------------------------------------------------

    projectAddingHandler = () => {
        this.setState({project_adding: true});
    }

    projectCancelHandler = () => {
        this.setState({project_adding: false});
    }

/// GIT PROJECTS----------------------------------------------------

    gitAddingHandler = () => {
        this.setState({git_adding: true})
    }

    gitCancelHandler = () => {
        this.setState({git_adding: false});
    }

    render () {
        return (
            <Aux>
                <Modal show={this.state.banner_adding} modalClosed={this.bannerCancelHandler}>
                    <NewBanner cancel={this.bannerCancelHandler} />
                </Modal>
                <Modal show={this.state.skill_adding} modalClosed={this.skillCancelHandler}>
                    <NewSkill cancel={this.skillCancelHandler} onAddSkill={this.addNewSkillHandler} />
                </Modal>
                <Modal show={this.state.project_adding} modalClosed={this.projectCancelHandler}>
                    <NewProject cancel={this.projectCancelHandler} />
                </Modal>
                <Modal show={this.state.git_adding} modalClosed={this.gitCancelHandler}>
                    <NewGit cancel={this.gitCancelHandler} />
                </Modal>

                <MainNavigation banner={this.state.banner} showButtons={this.showButtonsHandler} />

                <div className="banner-main">
                    <div className="banner-container">
                        <Banner added={this.bannerAddingHandler} showBanner={this.state.show} banner={this.state.banner} showButtons={this.state.showButtons} />
                    </div>
                </div>
                
                <div className="body-content">
                    <Skills className="skills-main" added={this.skillAddingHandler} showButtons={this.state.showButtons} skills={this.state.skills} />
                    <Projects className="projects-main" added={this.projectAddingHandler} showButtons={this.state.showButtons} />
                    <Gits added={this.gitAddingHandler} showButtons={this.state.showButtons} />
                </div>

                <Footer showFooter={this.state.show} banner={this.state.banner} showButtons={this.showButtonsHandler} />
            </Aux>
        );
    }
}

export default Portfolio;