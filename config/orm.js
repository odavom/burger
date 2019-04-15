// this imports the mysql connection
let connection = require('../config/connection.js');

function printQuestionMarks(num) {
    let arr = [];

    for (let i = 0; i < num; i++) {
        arr.push('?');
    }

    return arr.toString();
}
// printQuestionMarks(3)

// 
let orm = {
    /* all method creates connection query and selects from tale and 
    has cb to pass result into burger.js in model folder that 
    contains methods to modify orm for use with database */
    all: function(tableInput, cb) {
        let queryString = 'SELECT * FROM ' + tableInput + ';';
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            // console.log(result)
            cb(result);
        });
    },
// after this update burger.js
    update: function(tableInput, condition, cb) {
        connection.query('UPDATE ' + tableInput + ' SET devoured=true WHERE id='+ condition +';', function(err,result){
            if (err) throw err;
            cb(result);
        });
    },
}


module.exports = orm;