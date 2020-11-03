import React, { useState, useEffect, Fragment} from 'react';



function Profile()
{

    return(
        <div class="profile-box">
            
            <div className="profile-inner-box">
                <img src="https://steamcdn-a.akamaihd.net/steam/apps/205100/header.jpg?t=1541465639" class="profile-image">
                </img>
            </div>
            <div className="profile-inner-box">
                <div className="profile-name"><p>Brandon Gallagher</p></div>
                <div className="profile-position"><p>Student</p></div>
            </div>
            
            <div className="profile-inner-box-border">
                <div className="profile-description"><p>Some descrption blalalala</p></div>
            </div>

            <div className="profile-inner-box-border">
                <div className="profile-description"><p>Interests: </p></div>
            </div>

            <div className="profile-inner-box-border">
                <div className="profile-description-middle">
                    <a href><img className="logo" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"></img></a>
                    <a href><img className="logo" src="https://image.flaticon.com/icons/png/512/174/174857.png"></img></a>
                    <a href><img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Gmail_Icon.svg/1024px-Gmail_Icon.svg.png"></img></a>
                </div>

            </div>

            <div className="profile-inner-box-border-flex">
                <div className="link">
                    <p>Projects</p>
                </div>
                <div className="link">
                    <p>Resume</p>
                </div>
            </div>

            

        </div>
    );
}

export default Profile;