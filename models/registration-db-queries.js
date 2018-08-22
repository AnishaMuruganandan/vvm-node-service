var dbconnection = require('../dbconnection');
var RegistrationQueries = {
  findByEmailId: function(findByEmailIdQuery, verfiyEmailIdObj) {
    return new Promise((resolve, reject) => {
      return dbconnection.query(findByEmailIdQuery, [verfiyEmailIdObj.emailId], (err, rows) => {
        if (err)
          return reject(err);
        resolve(rows);
      });
    });
  },

  findByPhoneNumber: function(findByPhoneNoQuery, verifyPhoneNoObj) {
    return new Promise((resolve, reject) => {
      return dbconnection.query(findByPhoneNoQuery, [verifyPhoneNoObj.phoneNo], (err, rows) => {
        if (err)
          return reject(err);
        resolve(rows);
      });
    });
  },

  saveAll: function(saveAllQuery, saveRegistrationDetailsObj) {
    return new Promise((resolve, reject) => {
      return dbconnection.query(saveAllQuery, [
        saveRegistrationDetailsObj.emailId, saveRegistrationDetailsObj.phoneNo, saveRegistrationDetailsObj.otp, saveRegistrationDetailsObj.username, saveRegistrationDetailsObj.password
      ], (err, rows) => {
        if (err)
          return reject(err);
        resolve(rows);
      });
    });
  },

  updatePasswordByEmailId: function(updatePasswordByEmailIdQuery, updatePasswordObj) {
    return new Promise((resolve, reject) => {
      return dbconnection.query(updatePasswordByEmailIdQuery, [
        updatePasswordObj.password, updatePasswordObj.emailId
      ], (err, rows) => {
        if (err)
          return reject(err);
        resolve(rows);
      });
    });
  },

  updateProfileIdByLoginId: function(updateProfileIdByLoginIdQuery, updateProfileIdObj) {
    return new Promise((resolve, reject) => {
      return dbconnection.query(updateProfileIdByLoginIdQuery, [
        updateProfileIdObj.profileId, updateProfileIdObj.loginId
      ], (err, rows) => {
        if (err)
          return reject(err);
        resolve(rows);
      });
    });
  }

}

module.exports = RegistrationQueries;
