const express = require('express');
const bodyParser = require("body-parser");
const fs = require('fs');
const fileUpload = require('express-fileupload');
const session = require('express-session');
const path = require('path');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use(express.static('../../client'));
app.use(express.static('theSchool2/client'));
// app.use('/public', express.static('../../client'));
app.use('/public', express.static('theSchool2/client'));
// app.use('/node_modules', express.static('../../node_modules'));
app.use('/node_modules', express.static('theSchool2//node_modules'));

// ctrls

var StudentCtrl = require('../controllers/StudentController.js');
var loginCtrl = require('../controllers/LoginController.js');
var CourseCtrl = require('../controllers/CourseController.js');



app.use(fileUpload());

app.use(session({
    secret: 'ssshhhhh',
    resave: true,
    saveUninitialized: true
}));


var sess;
app.post('/login', function(req, res) {
    let user = JSON.parse(req.query.user);
    let checkUser = loginCtrl.checkUser(user, function(err, login) {
        if (err) {
            console.log(err);
        } else {
            console.log("login: " + login);
            sess = req.session;
            sess['username'] = user.name;
            sess['role'] = login[0].role_id;

            res.end(JSON.stringify({ login: true, role: login[0].role_id }));
        }


    });
});




app.get('/', function(req, res) {

    // fs.readFile('../../client/index.html', 'utf8', function(err, data) {
    fs.readFile('theSchool2/client/index.html', 'utf8', function(err, data) {
        if (err) {
            console.log(err);
        }

        res.end(data)
    });

});

app.get('/student', function(req, res) {
    StudentCtrl.StudentCtrl.read(function(err, students) {
        if (err) {
            res.end('error!');
        } else {
            console.log(students);
            res.end(JSON.stringify(students));
        }
    })
});

app.get('/course', function(req, res) {
    let data = JSON.parse(req.query.params);
    CourseCtrl.read(data, function(err, courses) {

        if (err) {
            res.end('error!');
        } else {
            console.log(courses);
            res.end(JSON.stringify(courses));
        }
    })
});

// Listen to '/product' in POST Verb methods
app.post('/products', function(req, res) {
    ProductsCtrl.Put(req.query.data, function(err, ans) {
        if (err) {
            res.end('error!');
        }
        res.end(JSON.stringify(ans));
    })

})


// Start the server
var server = app.listen(8081, function() {
    console.log('listening to 8081')
})