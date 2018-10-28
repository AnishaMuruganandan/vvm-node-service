var express = require('express');
var horoscopeQueries = require('../models/horoscope-db-queries');
var horoscopeQueriesConst = require('../query-constants/horoscope-query-constants');
var horoscopeService = (function() {
  saveHoroscopeDetails = async function(saveHoroscopeDetailsObj) {
    console.log("horoscopeService");
    var output = "";
    try {
      var output = await horoscopeQueries.saveHoroscopeDetailsQuery(horoscopeQueriesConst.saveHoroscopeDetailsQuery, saveHoroscopeDetailsObj);
      console.log(JSON.stringify(output) + "output");
    } catch (err) {
      msg = err;
      console.log('Opps, an error occurred', err);
    }
    return output;
  };

  getHoroscopeDetailsByProfileId = async function(profileId) {
    console.log("horoscopeService");
    var output;
    try {
      output = await horoscopeQueries.getHoroscopeDetailsByProfileIdQuery(horoscopeQueriesConst.getHoroscopeDetailsByProfileIdQuery, profileId);
      console.log(JSON.stringify(output) + "output");
    } catch (err) {
      output = err;
      console.log('Opps, an error occurred', err);
    }
    return output;
  };

  return {
    saveHoroscopeDetails: saveHoroscopeDetails,
    getHoroscopeDetailsByProfileId: getHoroscopeDetailsByProfileId
  }

})();

module.exports = horoscopeService;
