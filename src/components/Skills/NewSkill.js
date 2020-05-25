import React, { useState } from 'react';

import axios from 'axios';

import './NewSkill.css';


const NewSkill = props => {
    const [imageFile, setImageFile] = useState('');

    const skillSubmitHandler = async event => {
        const data = new FormData();
        data.append("image", imageFile);
    
        try {
            await axios.post("http://localhost:8080/api/skill", data)
        } catch (err) {
            console.log(err);
        }
        setImageFile('');
    };

    const inputHandler = event => {
      setImageFile(event.target.files[0]);
    };
    
    return (
        <React.Fragment>
            <form className="form-control" onSubmit={skillSubmitHandler}>
                <input type="file" onChange={inputHandler}/>
                <button className="newskill__add-btn" type="submit">ADD SKILL</button>
                <a className="newskill__cancel-btn" onClick={props.cancel}>CANCEL</a>
            </form>
        </React.Fragment>
    );
}

export default NewSkill;