// SET UP EXPRESS
var express = require("express");

// SET UP EXPRESS ROUTER
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req,res) {
    burger.all(function(data) {
        var burgerObj = {
            burgers: data
        };
        console.log(burgerObj + " FROM get ROUTE IN controllers.js");
        res.render("index", burgerObj);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.create([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, 
        req.body.devoured
    ], function(result) {
        console.log(result + " FROM THE post ROUTE IN controllers.js")
        res.json({ id: result.insertId });
       
    });
});

router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    
    console.log("condition VAR FROM THE put ROUTE IN controllers.js " + condition);
    console.log("condition", condition);

    burger.update({
        devoured: req.body.devoured
    }, condition, function(result) {
        console.log(result + "FROM THE PUT ROUTE IN controllers.js")
        // IF NO ROWS WHERE CHANGED THEN ID MUST NOT EXIST => 404 ERROR
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("CONDITION FROM THE delete ROUTE IN controllers.js" + condition);

    burger.delete(condition, function(result) {
        // IF NO ROWS WHERE CHANGED THEN ID MUST NOT EXIST => 404 ERROR
        if (result.affectedRows == 0) {
            console.log("Error in the delete route");
            return res.status(404).end();
        } else {
            res.status(200).end();
            console.log("Successfully Deleted");
        }
    });
});

// EXPORT FOR USE IN THE server.js file.
module.exports = router;