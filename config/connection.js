var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
    var pool = mysql.createPool(process.env.JAWSDB_URL);
} else {
    var pool = mysql.createPool({
        host: "kf3k4aywsrp0d2is.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        port: 3306,
        user: "lfy9crla4rab0z2n",
        password: "hx33c7kbqzt6851d",
        database: "	sy2z9v09zuool230"
    });
}


pool.getConnection(function (err) {
    if(err) {
        console.log("Error Connection: " + err.stack);
        return;
    }
    console.log("Connected as id " + pool.threadId);
});

pool.query('select 1 + 1', (err,rows) => { /* */ });

module.exports = pool;