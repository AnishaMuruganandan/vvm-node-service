var express = require('express');
var familyBackgroundQueries = require('../models/family-background-db-queries');
var familyBackgroundQueriesConst = require('../query-constants/family-background-query-constants');
var familyBackgroundService = (function() {
  saveFamilyBackgroundDetails = async function(saveFamilyBackgroundDetailsObj) {
    console.log("saveFamilyBackgroundDetails");
    var output = "";
    try {
      var output = await familyBackgroundQueries.saveFamilyBackgroundDetailsQuery(familyBackgroundQueriesConst.saveFamilyBackgroundDetailsQuery, saveFamilyBackgroundDetailsObj);
      console.log(JSON.stringify(output) + "output");
    } catch (err) {
      msg = err;
      console.log('Opps, an error occurred', err);
    }
    return output;
  };

  getFamilyDetailsByProfileId = async function(profileId) {
    console.log("horoscopeService");
    var output;
    try {
      output = await familyQueries.getFamilyDetailsByProfileIdQuery(familyQueriesConst.getFamilyDetailsByProfileIdQuery, profileId);
      console.log(JSON.stringify(output) + "output");
    } catch (err) {
      output = err;
      console.log('Opps, an error occurred', err);
    }
    return output;
  };


  return {
    saveFamilyBackgroundDetails: saveFamilyBackgroundDetails,
    getFamilyDetailsByProfileId: getFamilyDetailsByProfileId
  }

})();

module.exports = familyBackgroundService;
