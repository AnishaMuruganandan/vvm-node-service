var dbconnectionConst = require('../dbconnection');

var horoscopeQueries = {

  saveHoroscopeDetailsQuery: function(saveHoroscopeDetailsQuery, saveHoroscopeDetailsObj) {
    return new Promise((resolve, reject) => {
      let dbconnectionObj = dbconnectionConst.connectDatabase();

      return dbconnectionObj.query(saveHoroscopeDetailsQuery, [
        saveHoroscopeDetailsObj.profileId,
        saveHoroscopeDetailsObj.tob,
        saveHoroscopeDetailsObj.pob,
        saveHoroscopeDetailsObj.zodiac,
        saveHoroscopeDetailsObj.star,
        saveHoroscopeDetailsObj.lagna,
        saveHoroscopeDetailsObj.paagam,
        saveHoroscopeDetailsObj.jathagamSoftCopy
      ], (err, rows) => {
        dbconnectionConst.disconnectDatabase();
        if (err)
          reject(err);
        resolve(rows);
      });
    });
  },

    getHoroscopeDetailsByProfileIdQuery: function(getHoroscopeDetailsByProfileIdQuery, profileId) {
      return new Promise((resolve, reject) => {
        let dbconnection = dbconnectionConst.connectDatabase();
        return dbconnection.query(getHoroscopeDetailsByProfileIdQuery,[profileId], (err, rows) => {
          dbconnectionConst.disconnectDatabase();
          if (err)
            reject(err);
          resolve(rows);
        });
      });
    }
}

module.exports = horoscopeQueries;
