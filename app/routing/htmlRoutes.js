// Your `htmlRoutes.js` file should include two routes:

// * A GET Route to `/survey` which should display the survey page.
// * A default, catch-all route that leads to `home.html` which displays the home page.


var express = require('express');
var path = require("path");

// Exports the variable
module.exports = function (app) {
    // Sets the route for the home page - How can I make it loosly coupled? (without pointing to the public folder)
    // This satisfies Heroku requires 
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });

    // Sets the route for the about page - How can I make it loosly coupled? (without pointing to the public folder)
    app.get('/survey', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/survey.html'));
    });
}