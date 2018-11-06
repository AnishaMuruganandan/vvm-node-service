var dbconnectionConst = require('../dbconnection');

var familyBackgroundQueries = {

  saveFamilyBackgroundDetailsQuery: function(saveFamilyBackgroundDetailsQuery, saveFamilyBackgroundDetailsObj) {
    return new Promise((resolve, reject) => {
      let dbconnectionObj = dbconnectionConst.connectDatabase();

      return dbconnectionObj.query(saveFamilyBackgroundDetailsQuery, [
        saveFamilyBackgroundDetailsObj.profileId,
        saveFamilyBackgroundDetailsObj.siblingType,
        saveFamilyBackgroundDetailsObj.siblingAge,
        saveFamilyBackgroundDetailsObj.siblingMaritalStatus
      ], (err, rows) => {
        dbconnectionConst.disconnectDatabase();
        if (err)
          reject(err);
        resolve(rows);
      });
    });
  },

      getFamilyBackgroundDetailsByProfileIdQuery: function(getFamilyBackgroundDetailsByProfileIdQuery, profileId) {
        return new Promise((resolve, reject) => {
          let dbconnection = dbconnectionConst.connectDatabase();
          return dbconnection.query(getFamilyBackgroundDetailsByProfileIdQuery,[profileId], (err, rows) => {
            dbconnectionConst.disconnectDatabase();
            if (err)
              reject(err);
            resolve(rows);
          });
        });
      }

}

module.exports = familyBackgroundQueries;
