var express = require('express');
var loginQueries = require('../models/login-db-queries');
var loginQueriesConst = require('../query-constants/login-query-constant');
var async = require('async');

var loginService = (function() {

  let verifyLoginDetails = async function(verifyLoginDetailsObj) {
    console.log("verifyLoginDetails");
    var msg = "";
    try {
      var output = await (loginQueries.findByPhoneNoAndPassword(loginQueriesConst.findByPhoneNoAndPasswordQuery, verifyLoginDetailsObj));
      console.log(JSON.stringify(output) + "output");
      var count = Object.keys(output).length;
      console.log(count);
      if (count == 0) {
        console.log(count + "leng");
        msg = "no entry found";
        console.log(msg + "msg");
      } else {
        msg = "found";
        console.log(msg + "msg");
      }
    } catch (err) {
      msg = err;
      console.log('Opps, an error occurred', err);
    }
    return msg;
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

  return {
    verifyLoginDetails: verifyLoginDetails,
    updateLoginTime: updateLoginTime
  };


})();

module.exports = loginService;
