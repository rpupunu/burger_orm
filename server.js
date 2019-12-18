// SET UP EXPRESS SERVER
var express = require('express');
var app = express();

var PORT = process.env.PORT || 8080;

// STATIC CONTENT FOR THE APP TO USE FILES FROM THE PUBLIC FOLDER
app.use(express.static("public"));

// PARSE APP AS JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// SET HANDLEBARS
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

// SET UP ROUTES INPORTED FROM burgers_controllers.js
var routes = require("./controllers/burgers_controllers.js");

app.use(routes);

// START SERVER ON LOCALHOST PORT 8080 OR process.env.PORT for HEROKU
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});