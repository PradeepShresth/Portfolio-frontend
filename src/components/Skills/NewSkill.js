import React, { useState } from 'react';

import axios from 'axios';

import './NewSkill.css';


const NewSkill = props => {
    const [imageFile, setImageFile] = useState('');

    const skillSubmitHandler = async event => {
        event.preventDefault();
        const data = new FormData();
        data.append("image", imageFile);
        try {
            const response = await axios.post(process.env.REACT_APP_BACKEND_URL + "/skill", data);
            props.onAddSkill(response.data.skill);
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
                <button className="newskill__add-btn" type="submit" onClick={props.cancel}>ADD SKILL</button>
                <a className="newskill__cancel-btn" onClick={props.cancel}>CANCEL</a>
            </form>
        </React.Fragment>
    );
}

export default NewSkill;