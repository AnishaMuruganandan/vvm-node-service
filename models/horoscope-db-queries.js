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
        saveHoroscopeDetailsObj.jathagamSoftCopy
      ], (err, rows) => {
        dbconnectionConst.disconnectDatabase();
        if (err)
          reject(err);
        resolve(rows);
      });
    });
  }
}

module.exports = horoscopeQueries;
