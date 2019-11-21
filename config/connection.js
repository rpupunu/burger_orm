var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
      host: 'localhost',
      port: 3306,
      user: 'root',
      password: 'rootroot',
      database: burgers_db

    });
};


connection.connect(function (err) {
    if(err) {
        console.log("Error Connection: " + err.stack);
        return;
    }
    console.log("Connected as id " + pool.threadId);
});

pool.query('select 1 + 1', (err,rows) => { /* */ });

module.exports = connection;