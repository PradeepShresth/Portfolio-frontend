import React, { useState } from 'react';

import axios from 'axios';

import './NewBanner.css';


const NewBanner = props => {
    const [name, setName] = useState('');
    const [profession, setProfession] = useState('');
    const [fb, setFb] = useState('');
    const [tweet, setTweet] = useState('');
    const [insta, setInsta] = useState('');
    const [linked, setLinked] = useState('');
    const [imageFile, setImageFile] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    const BannerSubmitHandler = async event => {
        const data = new FormData();
        data.append("name", name);
        data.append("profession", profession);
        data.append("fbLink", fb);
        data.append("twitterLink", tweet);
        data.append("instaLink", insta);
        data.append("linkedLink", linked);
        data.append("image", imageFile);
        data.append("email", email);
        data.append("phone", phone);
        data.append("address", address);
    
        try {
            await axios.post(process.env.REACT_APP_BACKEND_URL + "/banner", data)
        } catch (err) {
            console.log(err);
        }
        setName('');
        setProfession('');
        setFb('');
        setTweet('');
        setInsta('');
        setLinked('');
        setImageFile('');
        setEmail('');
        setPhone('');
        setAddress('');
    };

    const nameHandler = event => {
      setName(event.target.value);
    };

    const professionHandler = event => {
      setProfession(event.target.value);
    };

    const fbLinkHandler = event => {
      setFb(event.target.value);
    };

    const twitterLinkHandler = event => {
      setTweet(event.target.value);
    };

    const instaLinkHandler = event => {
      setInsta(event.target.value);
    };

    const LinkedLinkHandler = event => {
      setLinked(event.target.value);
    };

    const imageHandler = event => {
      setImageFile(event.target.files[0]);
    };

    const emailHandler = event => {
      setEmail(event.target.value);
    };

    const phoneHandler = event => {
      setPhone(event.target.value);
    };

    const addressHandler = event => {
      setAddress(event.target.value);
    };
    
    return (
        <React.Fragment>
            <form className="form-control" onSubmit={BannerSubmitHandler}>
                <input type="text" placeholder="name" onChange={nameHandler}/>
                <input type="text" placeholder="profession" onChange={professionHandler}/>
                <input type="text" placeholder="fbLink" onChange={fbLinkHandler}/>
                <input type="text" placeholder="twitterLink" onChange={twitterLinkHandler}/>
                <input type="text" placeholder="instaLink" onChange={instaLinkHandler}/>
                <input type="text" placeholder="LinkedLink" onChange={LinkedLinkHandler}/>
                <input type="file" onChange={imageHandler}/>
                <input type="text" placeholder="email" onChange={emailHandler}/>
                <input type="text" placeholder="phone" onChange={phoneHandler}/>
                <input type="text" placeholder="address" onChange={addressHandler}/>
                <button className="newbanner__add-btn" type="submit">ADD BANNER</button>
                <a className="newbanner__cancel-btn" onClick={props.cancel}>CANCEL</a>
            </form>
        </React.Fragment>
    );
}

export default NewBanner;