var bl = require("../data/bl");
var model = require("../models/models");

var crypto = require('crypto');


function checkUser(user, callback) {
    let salt = "myApp##"
    hashPassword(salt+user.password, function(pass){
        bl.sql.findUser("administratior", user.name, pass, function(err, res) {
            if (err) {
                callback(err);
            } else {
                console.log("res: "+res);
                if (res.length <1){
                callback('no match');
            
                }
                callback(null, res);

                
            }
            
    
        });
    
    });


}


 
 
// Creating hash and salt 
function hashPassword(password, callback){
    let newpass = crypto.createHash('md5').update(password).digest("hex");
            callback(newpass);

    // Store hash (incl. algorithm, iterations, and salt) 
 
    // Verifying a hash 
    // password('hack').verifyAgainst(myuser.hash, function(error, verified) {
    //     if(error)
    //         throw new Error('Something went wrong!');
    //     if(!verified) {
    //         console.log("Don't try! We got you!");
    //     } else {
    //         console.log("The secret is...");
    //     }
    // });
}


module.exports.checkUser = checkUser;

