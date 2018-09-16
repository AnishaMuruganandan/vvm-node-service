var mysqlConnect = require('../dbconnection');



var loginQueries = {

  findByPhoneNoAndPassword: function(findByPhoneNoAndPasswordQuery, verifyLoginDetailsObj) {
    var dbconnection = mysqlConnect.connectDatabase();

    return new Promise((resolve, reject) => {
      dbconnection.query(findByPhoneNoAndPasswordQuery, [verifyLoginDetailsObj.phoneNo, verifyLoginDetailsObj.password], (err, rows) => {
        mysqlConnect.disconnectDatabase();
        if (err)
          return reject(err);
        return resolve(rows);
      });
    });
  },

  updateLoginTimeByLoginId: function(updateLoginTimeByLoginIdQuery, updateLoginTimeObj) {
    var dbconnection = mysqlConnect.connectDatabase();
    var result;

    return new Promise((resolve, reject) => {
      dbconnection.query(updateLoginTimeByLoginIdQuery, [updateLoginTimeObj.loginTime, updateLoginTimeObj.loginId], (err, rows) => {
        mysqlConnect.disconnectDatabase();
        if (err)
          return reject(err);
        return resolve(rows);
      });

    });
  }

}

module.exports = loginQueries;
