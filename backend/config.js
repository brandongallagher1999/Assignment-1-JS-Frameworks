

const resumeLocations = {
    "brandon" : "Brandon Gallagher Resume.pdf"
};

const userConfig = {
    brandon :  {
        imgLink: "https://steamcdn-a.akamaihd.net/steam/apps/205100/header.jpg?t=1541465639",
        linkedIn: "https://www.linkedin.com/in/brandonegallagher/",
        github : "https://github.com/brandongallagher1999",
        interests : "Programming, Philosophy, Sociology, Politics",
        name : "Brandon Gallagher",
        position : "Student",
        desc : "Final year student at Georgian College with 2 previous Software Development jobs and an internship."
    }

    /* you can add more people by adding a comma then putting in your own information using THIS model below

    <yourFirstName> : {
        imgLink : string,
        linkedIn : string,
        github : string,
        interests : string,
        name : string,
        position: string,
        desc: string
    }
    */
};

module.exports = {
    resumeLocations,
    userConfig
}