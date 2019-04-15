
let express = require('express');
let router = express.Router();

// importing to use it's database functions
let burger = require('../models/burger.js');
// made reference to burger.js in models folder and call burger.all passing burger_data
// calling burger.all within burger.js calling orm.all with orm.js fiel because server.js is call all this

router.get('/', function(req, res) {
    burger.all(function(burger_data) {
        console.log(burger_data); 
        res.render('index', {burger_data}); 
    });
});

router.put('/burgers/update', function(req, res) {
    burger.update(req.body.burger_id, function(result){
        console.log(result);
        res.redirect('/');
    });
});

// this is needed so it can be use by other files particularly the server.js
module.exports = router;