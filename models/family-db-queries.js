var dbconnectionConst = require('../dbconnection');

var familyQueries = {

  saveFamilyDetailsQuery: function(saveFamilyDetailsQuery, saveFamilyDetailsObj) {
    return new Promise((resolve, reject) => {
      let dbconnectionObj = dbconnectionConst.connectDatabase();

      return dbconnectionObj.query(saveFamilyDetailsQuery, [
        saveFamilyDetailsObj.profileId,
        saveFamilyDetailsObj.fatherName,
        saveFamilyDetailsObj.motherName,
        saveFamilyDetailsObj.siblingCount,
        saveFamilyDetailsObj.nativePalce,
        saveFamilyDetailsObj.motherTongue
      ], (err, rows) => {
        dbconnectionConst.disconnectDatabase();
        if (err)
          reject(err);
        resolve(rows);
      });
    });
  },

      getFamilyDetailsByProfileIdQuery: function(getFamilyDetailsByProfileIdQuery, profileId) {
        return new Promise((resolve, reject) => {
          let dbconnection = dbconnectionConst.connectDatabase();
          return dbconnection.query(getFamilyDetailsByProfileIdQuery,[profileId], (err, rows) => {
            dbconnectionConst.disconnectDatabase();
            if (err)
              reject(err);
            resolve(rows);
          });
        });
      }

}

module.exports = familyQueries;
