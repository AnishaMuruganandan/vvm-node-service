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
  };

  getProfileBasicDetails = async function(data) {
    console.log("profileService");
    try {
      if (data == "true")
        var output = await profileQueries.getBasicProfileDetails(profileQueriesConst.getTenProfileBasicDetailsQuery);
      else
        var output = await profileQueries.getBasicProfileDetails(profileQueriesConst.getProfileBasicDetailsQuery);
      console.log(JSON.stringify(output) + "output");
    } catch (err) {
      output = err;
      console.log('Opps, an error occurred', err);
    }
    return output;
  };

  getProfileBasicDetailsByProfileId = async function(profileId) {
    console.log("profileService" + profileId);
    try {
      var output = await profileQueries.getProfileBasicDetailsByProfileId(profileQueriesConst.getProfileBasicDetailsByProfileIdQuery, profileId);
      console.log(JSON.stringify(output) + "output");
    } catch (err) {
      output = err;
      console.log('Opps, an error occurred', err);
    }
    return output;
  };

  return {
    saveBasicProfileDetails: saveBasicProfileDetails,
    getProfileBasicDetails: getProfileBasicDetails,
    getProfileBasicDetailsByProfileId: getProfileBasicDetailsByProfileId
  }

})();

module.exports = profileService;
