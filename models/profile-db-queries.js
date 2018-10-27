var dbconnectionConst = require('../dbconnection');

var profileQueries = {

  saveBasicDetailsQuery: function(saveBasicDetailsQuery, saveBasicProfileDetailsObj) {
    return new Promise((resolve, reject) => {
      let dbconnectionObj = dbconnectionConst.connectDatabase();

      return dbconnectionObj.query(saveBasicDetailsQuery, [
        saveBasicProfileDetailsObj.name,
        saveBasicProfileDetailsObj.dateOfBirth,
        saveBasicProfileDetailsObj.height,
        saveBasicProfileDetailsObj.cityId,
        saveBasicProfileDetailsObj.educationId,
        saveBasicProfileDetailsObj.professionId,
        saveBasicProfileDetailsObj.religionId,
        saveBasicProfileDetailsObj.casteId,
        saveBasicProfileDetailsObj.profilePicture
      ], (err, rows) => {
        dbconnectionConst.disconnectDatabase();
        if (err)
          reject(err);
        resolve(rows);
      });
    });
  },

  saveProfileDetailsQuery: function(saveProfileDetailsQuery, saveProfileDetailsObj) {
    return new Promise((resolve, reject) => {
      let dbconnection = mysqlConnect.connectDatabase();
      return dbconnection.query(saveProfileDetailsQuery, [
        saveProfileDetailsObj.gender,
        saveProfileDetailsObj.salary,
        saveProfileDetailsObj.complexion,
        saveProfileDetailsObj.address,
        saveProfileDetailsObj.physicallyDisabled,
        saveProfileDetailsObj.languageKnown
      ], (err, rows) => {
        mysqlConnect.disconnectDatabase();
        if (err)
          reject(err);
        resolve(rows);
      });
    });
  },

  getProfileDetails: function(getProfileDetailsQuery) {
    return new Promise((resolve, reject) => {
      let dbconnection = mysqlConnect.connectDatabase();
      return dbconnection.query(getProfileDetailsQuery, (err, rows) => {
        mysqlConnect.disconnectDatabase();
        if (err)
          reject(err);
        resolve(rows);
      });
    });
  },

  getBasicProfileDetails: function(getProfileBasicDetailsQuery) {
    return new Promise((resolve, reject) => {
      let dbconnectionObj = dbconnectionConst.connectDatabase();
      return dbconnectionObj.query(getProfileBasicDetailsQuery, (err, rows) => {
        dbconnectionConst.disconnectDatabase();
        if (err)
          reject(err);
        resolve(rows);
      });
    });
  },

  getProfileBasicDetailsByProfileId: function(getProfileBasicDetailsByProfileIdQuery, profileId) {
    return new Promise((resolve, reject) => {
      let dbconnectionObj = dbconnectionConst.connectDatabase();
      return dbconnectionObj.query(getProfileBasicDetailsByProfileIdQuery, [profileId], (err, rows) => {
        dbconnectionConst.disconnectDatabase();
        if (err)
          reject(err);
          console.log("rows"+rows);
        resolve(rows);
      });
    });
  },

  updateProfileBasicDetailsById: function(updateProfileBasicDetailsByIdQuery, updateProfileBasicDetailsObj) {
    return new Promise((resolve, reject) => {
      let dbconnectionObj = dbconnectionConst.connectDatabase();
      return dbconnectionObj.query(updateProfileBasicDetailsByIdQuery, [updateProfileBasicDetailsObj.profileId,
        updateProfileBasicDetailsObj.cityId,
        updateProfileBasicDetailsObj.educationId,
        updateProfileBasicDetailsObj.professionId,
        updateProfileBasicDetailsObj.profileBasicId
      ], (err, rows) => {
        dbconnectionConst.disconnectDatabase();
        if (err)
          reject(err);
          console.log("rows"+rows);
        resolve(rows);
      });
    });
  }

}

module.exports = profileQueries;
