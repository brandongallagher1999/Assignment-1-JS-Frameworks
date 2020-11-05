
const config = require("../config");
const fs = require("fs");
const request = require("request");

// GET /download/:name
const download = (req, res) =>
{

    const name = req.params.name;

    try
    {
        const fileName = config.resumeLocations[name];
        
        res.download(`./public/resumes/${fileName}`);
    }
    catch (error)
    {
        res.send("Does not exist or file is invalid");
    }

}

module.exports = download;