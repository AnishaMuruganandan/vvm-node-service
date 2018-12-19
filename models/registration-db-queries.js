var dbconnectionConst = require('../dbconnection');
var registrationQueries = {
  findByEmailId: function(findByEmailIdQuery, verfiyEmailIdObj) {
    // var dbconnectionObj =dbconnectionConst.connectDatabase();
    return new Promise((resolve, reject) => {
      return dbconnectionObj.query(findByEmailIdQuery, [verfiyEmailIdObj.emailId], (err, rows) => {
        if (err)
          return reject(err);
        resolve(rows);
      });
    });
  },

  findByPhoneNumber: function(findByPhoneNoQuery, verifyPhoneNoObj) {
    return new Promise((resolve, reject) => {
        let dbconnectionObj = dbconnectionConst.connectDatabase();
      return dbconnectionObj.query(findByPhoneNoQuery, [verifyPhoneNoObj.phoneNo], (err, rows) => {
                dbconnectionConst.disconnectDatabase();
        if (err)
           reject(err);
        resolve(rows);
      });
    });
  },

  saveAll: function(saveAllQuery, saveRegistrationDetailsObj) {
    return new Promise((resolve, reject) => {

        let dbconnectionObj = dbconnectionConst.connectDatabase();
      return dbconnectionObj.query(saveAllQuery, [
        saveRegistrationDetailsObj.profileBasicId, saveRegistrationDetailsObj.emailId, saveRegistrationDetailsObj.phoneNo, saveRegistrationDetailsObj.otp, saveRegistrationDetailsObj.username, saveRegistrationDetailsObj.password
      ], (err, rows) => {

                        dbconnectionConst.disconnectDatabase();
        if (err)
           reject(err);
          console.log("rowsDb"+rows);

        resolve(rows);

      });
    });
  },

  updatePasswordByEmailId: function(updatePasswordByEmailIdQuery, updatePasswordObj) {
    return new Promise((resolve, reject) => {
      return dbconnectionObj.query(updatePasswordByEmailIdQuery, [
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
      return dbconnectionObj.query(updateProfileIdByLoginIdQuery, [
        updateProfileIdObj.profileId, updateProfileIdObj.loginId
      ], (err, rows) => {
        if (err)
          return reject(err);
        resolve(rows);
      });
    });
  }

}

module.exports = registrationQueries;
