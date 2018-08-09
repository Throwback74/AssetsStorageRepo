var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
var orm = {
  selectWhere: function(tableInput, colToSearch, valOfCol) {
    var queryString = "SELECT * FROM ?? WHERE ?? = ?";
    connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  selectAndOrder: function(whatToSelect, table, orderCol) {
    var queryString = "SELECT ?? FROM ?? ORDER BY ?? DESC";
    console.log(queryString);
    connection.query(queryString, [whatToSelect, table, orderCol], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  selectAndOrderBoth: function(whatToSelect, table, orderCol, whatToSelect, table, orderCol) {
  var queryString = "SELECT ?? FROM ?? ORDER BY ?? DESC AND SELECT ?? FROM ?? ORDER BY ?? DESC";
  console.log(queryString);
  connection.query(queryString, [whatToSelect, table, orderCol, whatToSelect, table, orderCol], function(err, result) {
    if (err) throw err;
    console.log(result);
  });
  }
  
};

var orm = {
    select: function(whatToSelect, tableInput) {
        connection.query("SELECT ?? FROM ??", [whatToSelect, tableInput], function(err, data){
            if(err) throw err;
            console.log(data);
        });
    }
};
module.exports = orm;