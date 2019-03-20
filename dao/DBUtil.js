var mysql = require("mysql");

function createConnection() {
    var connection = mysql.createConnection({
        host: "192.168.100.10",
        port: "3306",
        user: "root",
        password: "0820",
        database: "my_blog"
    });
    return connection;
}
module.exports.createConnection = createConnection;