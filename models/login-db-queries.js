var dbconnection = require('../dbconnection');

var loginQueries = {

  findByPhoneNoAndPassword: function(findByPhoneNoAndPasswordQuery, verifyLoginDetailsObj) {
    return new Promise((resolve, reject) => {
      return dbconnection.query(findByPhoneNoAndPasswordQuery, [verifyLoginDetailsObj.phoneNo, verifyLoginDetailsObj.password], (err, rows) => {
        if (err)
          return reject(err);
        resolve(rows);
      });
    });
  },

  updateLoginTimeByLoginId : function(updateLoginTimeByLoginIdQuery, updateLoginTimeObj) {
    return new Promise((resolve, reject) => {
      return dbconnection.query(updateLoginTimeByLoginIdQuery, [updateLoginTimeObj.loginTime, updateLoginTimeObj.loginId], (err, rows) => {
        if (err)
          return reject(err);
        resolve(rows);
      });
    });
  }

}

module.exports = loginQueries;
