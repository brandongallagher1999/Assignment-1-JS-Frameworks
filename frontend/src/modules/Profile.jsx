import React, { useState, useEffect} from 'react';
import { useParams} from "react-router-dom";

const axios = require("axios");

function Profile(props)
{
    const [name, setName] = useState("");
    const [imgLink, setImg] = useState("");
    const [position, setPosition] = useState("");
    const [desc, setDesc] = useState("");
    const [interests, setInterests] = useState("");
    const {reqName} = useParams();
    const [github, setGithub] = useState("");
    const [linkedIn, setLinkedin] = useState("");
    const [imgHash, setImgHash] = useState("");

    useEffect(() => {
        
        // Set state from our backend
        axios.get(`http://localhost:3001/${reqName}`)
        .then((res) => {
            setName(res.data.name);
            setPosition(res.data.position);
            setDesc(res.data.desc);
            setInterests(res.data.interests);
            setGithub(res.data.github);
            setLinkedin(res.data.linkedIn);
            setImg(res.data.imgLink);
            console.log(res.data);
            setImgHash(Date.now());
        });
        

    }, []);

    return(
        <div className="profile-box">
            
            <div className="profile-inner-box">
                <img src={`${imgLink}?${imgHash}`} className="profile-image">
                </img>
            </div>
            <div className="profile-inner-box">
                <div className="profile-name"><p> {name}</p></div>
                <div className="profile-position"><p>{position}</p></div>
            </div>
            
            <div className="profile-inner-box-border">
                <div className="profile-description"><p>{desc}</p></div>
            </div>

            <div className="profile-inner-box-border">
                <div className="profile-description"><p>Interests: {interests}</p></div>
            </div>

            <div className="profile-inner-box-border">
                <div className="profile-description-middle">
                    <a href={github}><img className="logo" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"></img></a>
                    <a href={linkedIn}><img className="logo" src="https://image.flaticon.com/icons/png/512/174/174857.png"></img></a>
                </div>

            </div>

            <div className="profile-inner-box-border-flex">
                <button className="button" style={{fontSize : "25px", margin: "20px"}}> Resume </button>
            </div>

            

        </div>
    );
}

export default Profile;