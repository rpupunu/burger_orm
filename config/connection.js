var mysql = require("mysql");


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


connection.connect(function (err) {
    if(err) {
        console.log("Error Connection: " + err.stack);
        return;
    }
    console.log("Connected as id " + connection.threadId);
});


module.exports = connection;