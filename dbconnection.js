var settings = require('./dbconnectiondetails.json');
var mysql = require('mysql');

var mysqlConnect = {

  connection: null,

  connectDatabase: function() {

      this.connection = mysql.createConnection(settings);
      this.connection.connect(function(err) {
        if (!err) {
          console.log('Database is connected!');
        } else {
          console.log('Error connecting database!');
        }
      });

    return this.connection;
  },


  disconnectDatabase: function() {

      this.connection.destroy();
        connection: null;
    
  }

}

module.exports = mysqlConnect;
