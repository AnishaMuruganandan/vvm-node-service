var express = require('express');
var profileQueries = require('../models/profile-db-queries');
var profileQueriesConst = require('../query-constants/profile-query-constants');
var profileService = (function() {

  saveProfileDetails: async function(saveProfileDetailsObj) {
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

    getProfileDetailsByProfileId: async function() {
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
        saveProfileDetails: saveProfileDetails,
        getProfileDetailsByProfileId: getProfileDetailsByProfileId
      }

    })();

module.exports = profileService;
