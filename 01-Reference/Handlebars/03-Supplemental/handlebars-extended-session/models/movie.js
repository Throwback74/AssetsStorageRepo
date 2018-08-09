var orm = require("../config/orm.js");

var movie = {
    findAll: function(cb) {
        orm.findAll("movies", function(data){
            cb(data);
        });
    },
    create: function(cols, vals, cb) {
        orm.create("movies", cols, vals, function(data){
            cb(data);
        });
    }
};
    

module.exports = movie;