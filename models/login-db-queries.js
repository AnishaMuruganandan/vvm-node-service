let mysqlConnect = require('../dbconnection');



var loginQueries = {

  findByPhoneNoAndPassword: function(findByPhoneNoAndPasswordQuery, verifyLoginDetailsObj) {


    return new Promise((resolve, reject) => {
        let dbconnection = mysqlConnect.connectDatabase();
      return dbconnection.query(findByPhoneNoAndPasswordQuery, [verifyLoginDetailsObj.phoneNo, verifyLoginDetailsObj.password
      ], (err, rows) => {
        mysqlConnect.disconnectDatabase();
        if (err)
           reject(err);
         resolve(rows);
      });
    });
  },

  updateLoginTimeByLoginId: function(updateLoginTimeByLoginIdQuery, updateLoginTimeObj) {
    let dbconnection = mysqlConnect.connectDatabase();
    var result;

    return new Promise((resolve, reject) => {
    return dbconnection.query(updateLoginTimeByLoginIdQuery, [updateLoginTimeObj.loginTime, updateLoginTimeObj.loginId
    ], (err, rows) => {
        mysqlConnect.disconnectDatabase();
        if (err)
           reject(err);
         resolve(rows);
      });

    });
  },

  getLoginDetailsByprofileBasicId : function(getLoginDetailsByprofileBasicIdQuery, profileBasicId) {
    return new Promise((resolve, reject) => {
      let dbconnectionObj = mysqlConnect.connectDatabase();
      return dbconnectionObj.query(getLoginDetailsByprofileBasicIdQuery, [profileBasicId], (err, rows) => {
        mysqlConnect.disconnectDatabase();
        if (err)
          reject(err);
        resolve(rows);
      });
    });
  }

}

module.exports = loginQueries;
