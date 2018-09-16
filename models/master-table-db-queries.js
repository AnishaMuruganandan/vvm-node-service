var dbconnection = require('../dbconnection');

var masterTableQueries = {

  getZodiacMasterTableDetails: function(getZodiacMasterTableDetailsQuery) {
    return new Promise((resolve, reject) => {
      return dbconnection.query(getZodiacMasterTableDetailsQuery, (err, rows) => {
        if (err)
          return reject(err);
        resolve(rows);
      });
    });
  }

}

module.exports = masterTableQueries;
