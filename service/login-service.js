var express = require('express');
var loginQueries = require('../models/login-db-queries');
var loginQueriesConst = require('../query-constants/login-query-constant');
var async = require('async');
var profileServiceObj = require('../service/profile-service');

var loginService = (function() {

  let verifyLoginDetails = async function(verifyLoginDetailsObj) {
    console.log("verifyLoginDetails");
    var loginData = {};
    try {
      var output = await (loginQueries.findByPhoneNoAndPassword(loginQueriesConst.findByPhoneNoAndPasswordQuery, verifyLoginDetailsObj));
      console.log(JSON.stringify(output) + "output1");
      console.log(output[0].profile_basic_id + "output");
      var count = Object.keys(output).length;
      console.log(count);
      if (count == 0) {
        console.log(count + "leng");
        loginData.msg = "no entry found";
        console.log(JSON.stringify(loginData.msg) + "msg");
      } else {
        loginData.profileBasicId = output[0].profile_basic_id;

        var profileBasicOutput = await profileServiceObj.getProfileBasicDetailsByProfileId(loginData.profileBasicId);
        console.log(output + "profileID fetching");
        loginData.profileId = profileBasicOutput[0].profile_id;

        loginData.msg = "found";
        console.log(JSON.stringify(loginData) + "msg");
      }
    } catch (err) {
      loginData.msg = err;
      console.log('Opps, an error occurred', err);
    }
    return loginData;
  };

  let updateLoginTime = async function(updateLoginTimeObj) {
    console.log("updateLoginTime");
    var msg = "";
    try {
      var output = await (loginQueries.updateLoginTimeByLoginId(loginQueriesConst.updateLoginTimeByLoginIdQuery, updateLoginTimeObj));
      console.log(JSON.stringify(output) + "output");
      msg = "inserted" + output.affectedRows;
    } catch (err) {
      msg = err;
      console.log('Opps, an error occurred', err);
    }
    return msg;
  };

  getLoginDetails = async function(profileBasicId) {
    console.log("profileService");
    try {
      var output = await loginQueries.getLoginDetailsByprofileBasicId(loginQueriesConst.getLoginDetailsByprofileBasicIdQuery, profileBasicId);
      console.log(JSON.stringify(output) + "output");
    } catch (err) {
      output = err;
      console.log('Opps, an error occurred', err);
    }
    return output;
  };


  return {
    verifyLoginDetails: verifyLoginDetails,
    updateLoginTime: updateLoginTime,
    getLoginDetails: getLoginDetails
  };


})();

module.exports = loginService;
