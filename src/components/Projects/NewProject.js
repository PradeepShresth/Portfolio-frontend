import React, { useState } from 'react';

import axios from 'axios';

import './NewProject.css';


const NewProject = props => {
    const [title, setTitle] = useState('');
    const [imageFile, setImageFile] = useState('');
    const [link, setLink] = useState('');

    const ProjectSubmitHandler = async event => {
        const data = new FormData();
        data.append("title", title);
        data.append("image", imageFile);
        data.append("link", link);

        console.log(link);
    
        try {
            await axios.post("http://localhost:8080/api/project", data)
        } catch (err) {
            console.log(err);
        }
        setTitle('');
        setImageFile('');
        setLink('');
    };

    const titleHandler = event => {
      setTitle(event.target.value);
    };

    const inputHandler = event => {
      setImageFile(event.target.files[0]);
    };

    const linkHandler = event => {
      setLink(event.target.value);
    };
    
    return (
        <React.Fragment>
            <form className="form-control" onSubmit={ProjectSubmitHandler}>
                <input type="text" placeholder="title" onChange={titleHandler}/>
                <input type="file" onChange={inputHandler}/>
                <input type="text" placeholder="link" onChange={linkHandler}/>
                <button className="newproject__add-btn" type="submit">ADD PROJECT</button>
                <a className="newproject__cancel-btn" onClick={props.cancel}>CANCEL</a>
            </form>
        </React.Fragment>
    );
}

export default NewProject;