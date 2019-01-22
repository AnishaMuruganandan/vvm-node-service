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
      let dbconnection = dbconnectionConst.connectDatabase();
      return dbconnection.query(saveProfileDetailsQuery, [
        saveProfileDetailsObj.gender,
        saveProfileDetailsObj.salary,
        saveProfileDetailsObj.complexion,
        saveProfileDetailsObj.address,
        saveProfileDetailsObj.physicallyDisabled,
        saveProfileDetailsObj.languageKnown,
        saveProfileDetailsObj.aboutMe,
        saveProfileDetailsObj.expectations,
        saveProfileDetailsObj.dummy,
        saveProfileDetailsObj.alternatephone1,
        saveProfileDetailsObj.alternatephone2

      ], (err, rows) => {
        dbconnectionConst.disconnectDatabase();
        if (err)
          reject(err);
        resolve(rows);
      });
    });
  },

  saveProfilePicQuery: function(saveProfilePicQuery, profilepic) {
    return new Promise((resolve, reject) => {
      let dbconnection = dbconnectionConst.connectDatabase();
      return dbconnection.query(saveProfilePicQuery, [
        profilepic.picURL,
        profilepic.profileBasicId
      ], (err, rows) => {
        dbconnectionConst.disconnectDatabase();
        if (err)
          reject(err);
        resolve(rows);
      });
    });
  },

  getProfileDetails: function(getProfileDetailsQuery, profileId) {
    return new Promise((resolve, reject) => {
      let dbconnection = dbconnectionConst.connectDatabase();
      return dbconnection.query(getProfileDetailsQuery, [profileId], (err, rows) => {
        dbconnectionConst.disconnectDatabase();
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
        console.log("rows" + rows);
        resolve(rows);
      });
    });
  },

  updateProfileBasicDetailsById: function(updateProfileBasicDetailsByIdQuery, updateProfileBasicDetailsObj) {
    return new Promise((resolve, reject) => {
      let dbconnectionObj = dbconnectionConst.connectDatabase();
      return dbconnectionObj.query(updateProfileBasicDetailsByIdQuery, [updateProfileBasicDetailsObj.profileId,
        updateProfileBasicDetailsObj.name,
        updateProfileBasicDetailsObj.dateOfBirth,
        updateProfileBasicDetailsObj.height,
        updateProfileBasicDetailsObj.cityId,
        updateProfileBasicDetailsObj.educationId,
        updateProfileBasicDetailsObj.professionId,
        updateProfileBasicDetailsObj.religionId,
        updateProfileBasicDetailsObj.casteId,
        updateProfileBasicDetailsObj.profileBasicId
      ], (err, rows) => {
        dbconnectionConst.disconnectDatabase();
        if (err)
          reject(err);
        console.log("rows" + rows);
        resolve(rows);
      });
    });
  }

}

module.exports = profileQueries;
