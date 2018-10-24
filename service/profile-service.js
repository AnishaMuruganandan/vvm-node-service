var express = require('express');
var profileQueries = require('../models/profile-db-queries');
var profileQueriesConst = require('../query-constants/profile-query-constant');
var profileService = (function() {

  saveBasicProfileDetails = async function(saveBasicProfileDetailsObj) {
    console.log("profileService");
    var output = "";
    try {
      var output = await profileQueries.saveBasicDetailsQuery(profileQueriesConst.saveBasicDetailsQuery, saveBasicProfileDetailsObj);
      console.log(JSON.stringify(output) + "output");
    } catch (err) {
      msg = err;
      console.log('Opps, an error occurred', err);
    }
    return output;
  };

  saveProfileDetails = async function(saveProfileDetailsObj) {
    console.log("profileService");
    var msg = "";
    try {
      var output = await profileQueries.saveAll(profileQueriesConst.saveAllQuery, saveProfileDetailsObj);
      console.log(JSON.stringify(output) + "output");
      msg = "profile" + output.profileId;
    } catch (err) {
      msg = err;
      console.log('Opps, an error occurred', err);
    }
    return msg;
  };

  getProfileDetailsByProfileId = async function() {
    console.log("profileService");
    var msg = "";
    try {
      var output = await profileQueries.getProfileDetails(profileQueriesConst.getProfileDetailsQuery);
      console.log(JSON.stringify(output) + "output");
      msg = "profile" + output.profileId;
    } catch (err) {
      msg = err;
      console.log('Opps, an error occurred', err);
    }
    return msg;
  }

  return {
    saveBasicProfileDetails: saveBasicProfileDetails,
    getProfileDetailsByProfileId: getProfileDetailsByProfileId
  }

})();

module.exports = profileService;
