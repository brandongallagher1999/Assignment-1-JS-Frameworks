import React, { useState, useEffect, Fragment} from 'react';

function NavBar()
{

    const [name, setName] = useState("");

    useEffect(() => {
        setName("Brandon");
    }, []);

    return (
        <Fragment>
            <nav class="navbar" style={{ fontSize: "20px", margin: "45px", backgroundColor: "rgb(230, 255, 255)"}}>
                <div class="navbar-brand">
                    <a class="navbar-item">
                        <span style={{fontFamily: "Brush Script MT"}}>
                            {name}
                        </span>
                    </a>
                </div>
                <div class="navbar-menu">
                    <div class="navbar-end">
                        <a class="navbar-item">
                            Home
                        </a>
                        <a class="navbar-item">
                            Education
                        </a>
                        <a class="navbar-item">
                            Experience
                        </a>
                        <a class="navbar-item">
                            Projects
                        </a>
                        <a class="navbar-item">
                            Open Source
                        </a>
                        <a class="navbar-item">
                            Contact Me
                        </a>
                    </div>
                </div>
            </nav>
        </Fragment>
    );
}

export default NavBar;