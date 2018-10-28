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
      var output = await profileQueries.saveProfileDetailsQuery(profileQueriesConst.saveProfileDetailsQuery, saveProfileDetailsObj);
      console.log(JSON.stringify(output) + "output");
      msg = output;
    } catch (err) {
      msg = err;
      console.log('Opps, an error occurred', err);
    }
    return msg;
  };

  saveProfilePicture = async function(profilepic) {
    console.log("profileService");
    var msg = "";
    try {
      var output = await profileQueries.saveProfilePicQuery(profileQueriesConst.saveProfilePicQuery, profilepic);
      console.log(JSON.stringify(output) + "output");
      msg = output;
    } catch (err) {
      msg = err;
      console.log('Opps, an error occurred', err);
    }
    return msg;
  };

  getProfileDetailsByProfileId = async function(profileId) {
    console.log("profileService");
    var output;
    try {
      output = await profileQueries.getProfileDetails(profileQueriesConst.getProfileDetailsQuery, profileId);
      console.log(JSON.stringify(output) + "output");
    } catch (err) {
      output = err;
      console.log('Opps, an error occurred', err);
    }
    return output;
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

  updateProfileBasicDetails = async function(updateProfileBasicDetailsObj) {
    console.log("profileService" + profileId);
    try {
      var output = await profileQueries.updateProfileBasicDetailsById(profileQueriesConst.updateProfileBasicDetailsByIdQuery, updateProfileBasicDetailsObj);
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
    getProfileBasicDetailsByProfileId: getProfileBasicDetailsByProfileId,
    updateProfileBasicDetails: updateProfileBasicDetails,
    saveProfileDetails: saveProfileDetails,
    saveProfilePicture: saveProfilePicture,
    getProfileDetailsByProfileId: getProfileDetailsByProfileId
  }

})();

module.exports = profileService;
