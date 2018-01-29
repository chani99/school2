var bl = require("../data/bl");
var model = require("../models/models");
const tableName = 'course';

// CRUD
function read(params, callback) {
    switch (params.action) {
        case 'getCoursesForStudent':
            let selected_rows = "course.id, course.name, course.image";
            let table2 = 'student';
            let table3 = 'student_course';
            let Column_equal_to = 'course.id = student_course.c_id';
            let Column_equal_to2 = 'student.id = student_course.s_id';
            let where = 'student.id = ' + params.studentid;

            bl.sql.getInnerJoin3table(selected_rows, tableName, table2, table3, Column_equal_to, Column_equal_to2, where, function(err, rows) {
                if (err) {
                    callback(err);
                } else {
                    const CouseObjectsArray = [];
                    rows.forEach(function(row) {
                        CouseObjectsArray.push(new model.createModel.Cuorse(row));
                    });
                    callback(null, CouseObjectsArray);
                }
            });

            break;
    }




}





module.exports = {
    read: read
};