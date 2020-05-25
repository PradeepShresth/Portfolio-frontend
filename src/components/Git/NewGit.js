import React, { useState } from 'react';

import axios from 'axios';

import './NewGit.css';


const NewGit = props => {
    const [title, setTitle] = useState('');
    const [link, setLink] = useState('');

    const gitSubmitHandler = async event => {
        const data = {
            title: title,
            link: link
        }
    
        try {
            await axios.post("http://localhost:8080/api/git", data)
        } catch (err) {
            console.log(err);
        }
    };

    const textHandler = event => {
        setTitle(event.target.value);
    };

    const linkHandler = event => {
        setLink(event.target.value);
    };
    
    return (
        <React.Fragment>
            <form className="form-control" onSubmit={gitSubmitHandler}>
                <input type="text" placeholder="Title" onChange={textHandler}/>
                <input type="text" placeholder="Link" onChange={linkHandler}/>
                <button className="git__add-btn" type="submit">ADD GIT</button>
                <a className="git__cancel-btn" onClick={props.cancel}>CANCEL</a>
            </form>
        </React.Fragment>
    );
}

export default NewGit;