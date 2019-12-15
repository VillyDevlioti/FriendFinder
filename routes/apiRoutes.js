var express = require('express');
var router = express.Router();
var app = express();
var mysql = require("mysql");

//importing the friends data
var data = require('../data/data');
var friends = data.friends;
var connection = data.connection;




/* GET /api/friends listing. */

app.get('/api/friends', function (req, res, next) {
  
  // If the main route is hit, then we initiate a SQL query to grab all records.
  // All of the resulting records are stored in the variable "result."

  console.log(connection);

  connection.query("SELECT * FROM friends", function(err, result) {
    if (err) throw err;
    console.log(result);
  });
});

/* POST /api/friends data. */

app.post("/api/friends", function (req, res) {

  var friendToAdd = req.params.body;
  console.log(friendToAdd);


});

module.exports = router;

