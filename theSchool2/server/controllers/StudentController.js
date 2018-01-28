var bl = require("../data/bl");
var model = require("../models/models");


// CRUD
function read(callback) {

    bl.sql.getAllFromTable('student', function(err, rows) {
        if (err) {
            callback(err);
        } else {
            const StudentObjectsArray = [];
            rows.forEach(function(row) {
                StudentObjectsArray.push(new model.createModel.Student(row));
            });
            callback(null, StudentObjectsArray);
        }
    });
}


module.exports.StudentCtrl = {
    read: read
};