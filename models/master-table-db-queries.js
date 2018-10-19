var dbconnection = require('../dbconnection');

var masterTableQueries = {

  getZodiacMasterTableDetails: function(getZodiacMasterTableDetailsQuery) {
    return new Promise((resolve, reject) => {
      let dbconnection = mysqlConnect.connectDatabase();
      return dbconnection.query(getZodiacMasterTableDetailsQuery, (err, rows) => {
        mysqlConnect.disconnectDatabase();
        if (err)
          return reject(err);
        resolve(rows);
      });
    });
  },

  getStarMasterTableDetails: function(getStarMasterTableDetailsQuery) {
    return new Promise((resolve, reject) => {
      let dbconnection = mysqlConnect.connectDatabase();
      return dbconnection.query(getStarMasterTableDetailsQuery, (err, rows) => {
        mysqlConnect.disconnectDatabase();
        if (err)
          return reject(err);
        resolve(rows);
      });
    });
  },

  getSalaryMasterTableDetails: function(getSalaryMasterTableDetailsQuery) {
    return new Promise((resolve, reject) => {
      let dbconnection = mysqlConnect.connectDatabase();
      return dbconnection.query(getSalaryMasterTableDetailsQuery, (err, rows) => {
        mysqlConnect.disconnectDatabase();
        if (err)
          return reject(err);
        resolve(rows);
      });
    });
  },

  getReligionsMasterTableDetails: function(getReligionsMasterTableDetailsQuery) {
    return new Promise((resolve, reject) => {
      let dbconnection = mysqlConnect.connectDatabase();
      return dbconnection.query(getReligionsMasterTableDetailsQuery, (err, rows) => {
        mysqlConnect.disconnectDatabase();
        if (err)
          return reject(err);
        resolve(rows);
      });
    });
  },

  getRelativeTypeMasterTableDetails: function(getRelativeTypeMasterTableDetailsQuery) {
    return new Promise((resolve, reject) => {
      let dbconnection = mysqlConnect.connectDatabase();
      return dbconnection.query(getRelativeTypeMasterTableDetailsQuery, (err, rows) => {
        mysqlConnect.disconnectDatabase();
        if (err)
          return reject(err);
        resolve(rows);
      });
    });
  },

  getProfessionDetailsMasterTableDetails: function(getProfessionDetailsMasterTableDetailsQuery) {
    return new Promise((resolve, reject) => {
      let dbconnection = mysqlConnect.connectDatabase();
      return dbconnection.query(getProfessionDetailsMasterTableDetailsQuery, (err, rows) => {
        mysqlConnect.disconnectDatabase();
        if (err)
          return reject(err);
        resolve(rows);
      });
    });
  },

  getMotherTongueMasterTableDetails: function(getMotherTongueMasterTableDetailsQuery) {
    return new Promise((resolve, reject) => {
      let dbconnection = mysqlConnect.connectDatabase();
      return dbconnection.query(getMotherTongueMasterTableDetailsQuery, (err, rows) => {
        mysqlConnect.disconnectDatabase();
        if (err)
          return reject(err);
        resolve(rows);
      });
    });
  },

  getLanguagesMasterTableDetails: function(getLanguagesMasterTableDetailsQuery) {
    return new Promise((resolve, reject) => {
      let dbconnection = mysqlConnect.connectDatabase();
      return dbconnection.query(getLanguagesMasterTableDetailsQuery, (err, rows) => {
        mysqlConnect.disconnectDatabase();
        if (err)
          return reject(err);
        resolve(rows);
      });
    });
  },

  getLagnaMasterTableDetails: function(getLagnaMasterTableDetailsQuery) {
    return new Promise((resolve, reject) => {
      let dbconnection = mysqlConnect.connectDatabase();
      return dbconnection.query(getLagnaMasterTableDetailsQuery, (err, rows) => {
        mysqlConnect.disconnectDatabase();
        if (err)
          return reject(err);
        resolve(rows);
      });
    });
  },

  getGothramMasterTableDetails: function(getGothramMasterTableDetailsQuery) {
    return new Promise((resolve, reject) => {
      let dbconnection = mysqlConnect.connectDatabase();
      return dbconnection.query(getGothramMasterTableDetailsQuery, (err, rows) => {
        mysqlConnect.disconnectDatabase();
        if (err)
          return reject(err);
        resolve(rows);
      });
    });
  },

  getEducationalQualificationMasterTableDetails: function(getEducationalQualificationMasterTableDetailsQuery) {
    return new Promise((resolve, reject) => {
      let dbconnection = mysqlConnect.connectDatabase();
      return dbconnection.query(getEducationalQualificationMasterTableDetailsQuery, (err, rows) => {
        mysqlConnect.disconnectDatabase();
        if (err)
          return reject(err);
        resolve(rows);
      });
    });
  },

  getCityMasterTableDetails: function(getCityMasterTableDetailsQuery) {
    return new Promise((resolve, reject) => {
      let dbconnection = mysqlConnect.connectDatabase();
      return dbconnection.query(getCityMasterTableDetailsQuery, (err, rows) => {
        mysqlConnect.disconnectDatabase();
        if (err)
          return reject(err);
        resolve(rows);
      });
    });
  },

  getCasteMasterTableDetails: function(getCasteMasterTableDetailsQuery) {
    return new Promise((resolve, reject) => {
      let dbconnection = mysqlConnect.connectDatabase();
      return dbconnection.query(getCasteMasterTableDetailsQuery, (err, rows) => {
        mysqlConnect.disconnectDatabase();
        if (err)
          return reject(err);
        resolve(rows);
      });
    });
  },
}

module.exports = masterTableQueries;
