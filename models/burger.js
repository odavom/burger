// require orm and contains methods to modify orm with burgers db

let orm = require('../config/orm.js')

let burger = {
    // calling orm.all and inserting burgers as table and running
    // function of res ass callback which will be sent into burgers_controller file
    all: function(cb) {
        orm.all('burgers', function(res) {
            cb(res);
        });
    },
// after this update burgers_controller
    update: function(id, cb){
        orm.update('burgers', id ,cb);
    },
}



module.exports = burger;