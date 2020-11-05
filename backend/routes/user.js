var express = require('express');

// GET /:name/
const getUserInfo = (req, res) =>
{
    
    const name = req.params.reqName;
    let returnDict = {};
    if (name == "brandon")
    {
        returnDict.interests = "Programming, Philosophy, Sociology, Politics";
        returnDict.name = "Brandon Gallagher";
        returnDict.position = "Student";
        returnDict.desc = "Final year student at Georgian College with 2 previous Software Development jobs and an internship.";
        returnDict.github = "https://github.com/brandongallagher1999";
        returnDict.linkedIn = "https://www.linkedin.com/in/brandonegallagher/";
        returnDict.imgLink = "https://steamcdn-a.akamaihd.net/steam/apps/205100/header.jpg?t=1541465639";

    } else if (name == "nadine")
    {
        returnDict.name = "Nadine Paquette";
        returnDict.position = "Student";
        

    } else if (name == "joel")
    {
        console.log("okay");
    }

    

    res.send(returnDict);
}

module.exports = getUserInfo;