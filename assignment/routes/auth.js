// user registration
var express = require('express');
var router = express.Router();
var connection  = require('../lib/db.js');

router.get('/', function(req, res, next){
    // render to registration page
res.render('register', {
        title: 'Register here!',
        email: '',
        password: ''     
    })
})

router.post('/register', function(req, res, next){  
    var user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }
    connection.query('INSERT INTO users SET ?', user, function(err, result) {
        if (err) {
            console.log(err)
            res.render('error', {
                title: 'Error Page'                 
            })
        } else {                
            res.redirect('/home');
        }
    })
    
    
    });

router.get('/home', function(req, res, next) {
    res.render('home', {
        title:"Dashboard",    
    });
});

module.exports = router;
