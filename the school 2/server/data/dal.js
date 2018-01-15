const mysql = require("mysql");

function executeQuery(query, callback) {
    const con = mysql.createConnection(
        // connection details
        {
            host: "localhost",
            user: "root",
            password: "",
            database: "school"
        }
    );

    // 3.cconnect
    con.connect(function(err) {
        if (err) {
            console.log("Error connecting to DB:" + err);
            return;
        }
        console.log("Connected");
    });

    // 4. crud : insert
    con.query(query, function(err, rows) {
        if (err) {
            callback(err);
        } else {
            callback(null, rows);
            /*rows.forEach(function (row) {
                arr.push(row);
            });*/
        }
    });
    con.end();
}

module.exports.executeQuery = executeQuery;