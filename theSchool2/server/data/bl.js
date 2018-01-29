var dal = require("./dal");
// var models = require('./models');


function getAllFromTable(tableName, callback) {
    dal.executeQuery('SELECT * FROM `' + tableName + '`', function(err, rows) {
        if (err) {
            callback(err);
        }
        callback(null, rows);
    });
}

//compare user name and password to db
function findUser(tableName, name, password, callback) {
    dal.executeQuery("SELECT * FROM " + tableName + " WHERE name ='" + name + "'AND password ='" + password + "'", function(err, rows) {
        if (err) {
            callback(err);
        }
        console.log("be: " + rows);
        callback(null, rows);
    });

}

function getInnerJoin3table(selected_rows, table1, table2, table3, Column_equal_to, Column_equal_to2, where, callback) {
    dal.executeQuery("SELECT " + selected_rows + " FROM " + table1 + " INNER JOIN " + table3 + " ON " + Column_equal_to + " INNER JOIN " + table2 + " ON " + Column_equal_to2 + " WHERE " + where, function(err, rows) {
        if (err) {
            callback(err);
        }
        console.log("be: " + rows);
        callback(null, rows);
    });

}


module.exports.sql = {
    getAllFromTable: getAllFromTable,
    findUser: findUser,
    getInnerJoin3table: getInnerJoin3table
};


// const customersObjectsArray = [];
// rows.forEach(function (row) {
//     customersObjectsArray.push(new models.Customer(row));
// });