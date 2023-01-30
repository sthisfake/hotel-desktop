function createDBConnection(){
    var mysql      = require('mysql');
    var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    port     :  3306 , 
    password : 'Headmaster67ToYou#',
    database : 'hoteldb'
  });

  connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
  return connection;
}

module.exports = {createDBConnection}

