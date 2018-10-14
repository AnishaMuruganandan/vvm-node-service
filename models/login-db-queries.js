let mysqlConnect = require('../dbconnection');



var loginQueries = {

  findByPhoneNoAndPassword: function(findByPhoneNoAndPasswordQuery, verifyLoginDetailsObj) {


    return new Promise((resolve, reject) => {
        let dbconnection = mysqlConnect.connectDatabase();
      dbconnection.query(findByPhoneNoAndPasswordQuery, [verifyLoginDetailsObj.phoneNo, verifyLoginDetailsObj.password], (err, rows) => {
        mysqlConnect.disconnectDatabase();
        if (err)
          return reject(err);
        return resolve(rows);
      });
    });
  },

  updateLoginTimeByLoginId: function(updateLoginTimeByLoginIdQuery, updateLoginTimeObj) {
    let dbconnection = mysqlConnect.connectDatabase();
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
