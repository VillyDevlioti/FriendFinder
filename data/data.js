var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root123",
  database: "FriendFinder"
});

const friends = [];

connection.query("SELECT * FROM friends", function(err, result) {
    if (err) throw err;
    // We then begin parse the SQL data  and store it into the friends table of objects.
    for (var i=0; i<result.length; i++)
    {
        friends.push(result[i]);
    }    
    
});
var data = {
    friends: friends,
};

module.exports = data;
module.exports = connection;