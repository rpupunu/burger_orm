// SET UP MYSQL
var mysql = require("mysql");

// SET UP CONNECTION FOR JAWSDB ON HEROKU AND DEFAULT TO LOCALHOST
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
      host: 'localhost',
      port: 3306,
      user: 'root',
      password: 'rootroot',
      database: "burgers_db"

    });
};

// MAKE CONNECTION ON CONSOLE LOG ERRORS 
connection.connect(function (err) {
    if(err) {
        console.log("Error Connection: " + err.stack);
        return;
    }
    console.log("Connected as id: " + connection.threadId);
});

// EXPORT CONNECTION FOR THE ORM TO USE
module.exports = connection;