var bl = require('../data/bl');
var model = require('../models/models');


// CRUD
function read(callback) {

    bl.sql.getAllFromTable(function(err, rows) {
        if (err) {
            callback(err);
        }

        const StudentObjectsArray = [];
        rows.forEach(function(row) {
            StudentObjectsArray.push(new models.createModel.StudentModel(row));
        });
        callback(null, custArray);
    })
}


module.exports.StudentCtrl = {
    Read: read
}