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

  saveAll: function(saveAllQuery, saveProfileDetailsObj) {
    return new Promise((resolve, reject) => {
      let dbconnection = mysqlConnect.connectDatabase();
      return dbconnection.query(saveAllQuery, [
        saveProfileDetailsObj.name,
        saveProfileDetailsObj.dateOfBirth,
        saveProfileDetailsObj.age,
        saveProfileDetailsObj.religionId,
        saveProfileDetailsObj.gender,
        saveProfileDetailsObj.educationId,
        saveProfileDetailsObj.professionId,
        saveProfileDetailsObj.salaryId,
        saveProfileDetailsObj.height,
        saveProfileDetailsObj.complexion,
        saveProfileDetailsObj.cityId,
        saveProfileDetailsObj.address,
        saveProfileDetailsObj.physicalDisablity,
        saveProfileDetailsObj.profilePicture
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
      let dbconnection = mysqlConnect.connectDatabase();
      return dbconnection.query(getProfileBasicDetailsQuery, (err, rows) => {
        mysqlConnect.disconnectDatabase();
        if (err)
          reject(err);
        resolve(rows);
      });
    });
  },

  getProfileBasicDetailsByProfileId: function(getProfileBasicDetailsByProfileIdQuery) {
    return new Promise((resolve, reject) => {
      let dbconnection = mysqlConnect.connectDatabase();
      return dbconnection.query(getProfileBasicDetailsByProfileIdQuery, (err, rows) => {
        mysqlConnect.disconnectDatabase();
        if (err)
          reject(err);
        resolve(rows);
      });
    });
  }

}

module.exports = profileQueries;
