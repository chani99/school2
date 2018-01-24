var express = require('express');
var bodyParser = require("body-parser");
var fs = require('fs');

// ctrls
var ProductsCtrl = require('../controllers/StudentController');

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('../../client'));
app.use('/public', express.static('../../client'));
app.use('/node_modules', express.static('../../node_modules'));


// Express - to serve the client
// body parser - To handle the data of post

// Listen to '/' in GET Verb methods - serve the main Angular index.html file
app.get('/', function (req, res) {

    fs.readFile('../../client/index.html', 'utf8', function (err, data) {
        if (err) {
            console.log(err);
        }

        res.end(data) 
    });
   
});

// Listen to '/product' in GET Verb methods
app.get('/student', function (req, res) {
    ProductsCtrl.Read(function(err, products) {
        if (err) {
            res.end('error!');
        }
        res.end(JSON.stringify(products));
    })
});

// Listen to '/product' in POST Verb methods
 app.post('/products', function (req, res) {
    ProductsCtrl.Put(req.query.data, function(err, ans) {
        if (err) {
            res.end('error!');
        }
        res.end(JSON.stringify(ans));
    })

 })


// Start the server
var server = app.listen(8081, function () {
    console.log('listening to 8081')
})
