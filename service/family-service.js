var express = require('express');
var familyQueries = require('../models/family-db-queries');
var familyQueriesConst = require('../query-constants/family-query-constants');
var familyService = (function() {
  saveFamilyDetails = async function(saveFamilyDetailsObj) {
    console.log("familyService");
    var output = "";
    try {
      var output = await familyQueries.saveFamilyDetailsQuery(familyQueriesConst.saveFamilyDetailsQuery, saveFamilyDetailsObj);
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
    saveFamilyDetails: saveFamilyDetails,
    getFamilyDetailsByProfileId: getFamilyDetailsByProfileId
  }

})();

module.exports = familyService;
