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
function findUser(tableName, name, password, callback){
    dal.executeQuery("SELECT * FROM "+tableName+" WHERE name ='"+name+"'AND password ='"+password+"'", function(err, rows) {
        if (err) {
            callback(err);
        }
        console.log("be: " + rows);
        callback(null, rows);
    });
    
}


module.exports.sql = {
    getAllFromTable: getAllFromTable,
    findUser: findUser
};


// const customersObjectsArray = [];
// rows.forEach(function (row) {
//     customersObjectsArray.push(new models.Customer(row));
// });