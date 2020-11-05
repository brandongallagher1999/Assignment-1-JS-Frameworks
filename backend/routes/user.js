//var express = require('express');

const config = require("../config");

// GET /:name/
const getUserInfo = (req, res) =>
{
    
    const name = req.params.reqName;
    let returnDict = {};
    try
    {
        returnDict = config.userConfig[name]; // GET /brandon/ RETURNS --> userConfig.brandon from the config.js file
        res.send(returnDict);
    }
    catch(error)
    {
        res.send("Person does not exist");
    }
    
}

module.exports = getUserInfo;