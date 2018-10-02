var express = require('express');
var loginServiceObj = require('../service/login-service');
var loginObj = require('../objects/login-obj');


var loginDelegate = (function() {


  let verifyLoginDetails = async function(phoneNo, password) {
    console.log("dlegate");
    var verifyLoginDetailsObj = new loginObj.verifyLoginDetailsObj(phoneNo, password);
    try {
      console.log("del try");
      var output = await (loginServiceObj.verifyLoginDetails(verifyLoginDetailsObj));
      console.log(output + "out delegate");
      return output;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  let updateLoginTime = async function(loginId, loginDetails) {
    console.log("dlegate");
    var updateLoginTimeObj = new loginObj.updateLoginTimeObj(loginId, loginDetails.loginTime);
    try {
      console.log("del try");
      var output = await (loginServiceObj.updateLoginTime(updateLoginTimeObj));
      console.log(output + "out delegate");
      return output;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  return {
    verifyLoginDetails: verifyLoginDetails,
    updateLoginTime: updateLoginTime
  }

})();

module.exports = loginDelegate;
