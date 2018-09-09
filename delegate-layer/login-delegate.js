var express = require('express');
var loginServiceObj = require('../service/login-service');
var loginObject = require('../objects/login-obj');

var loginDelegate = {

  verifyLoginDetails: async function(phoneNo, password) {
      console.log("dlegate");
      var verifyLoginDetailsObj = new loginObject.verifyLoginDetailsObj(phoneNo, password);
      try {
        console.log("del try");
        var output = await loginServiceObj.verifyLoginDetails(verifyLoginDetailsObj);
        console.log(output + "out delegate");
        return output;
      } catch (error) {
        console.log(error);
        return error;
      }
    },

    updateLoginTime: async function(loginId, loginDetails) {
      console.log("dlegate");
      var updateLoginTimeObj = new loginObject.updateLoginTimeObj(loginId, loginDetails.loginTime);
      try {
        console.log("del try");
        var output = await loginServiceObj.updateLoginTime(updateLoginTimeObj);
        console.log(output + "out delegate");
        return output;
      } catch (error) {
        console.log(error);
        return error;
      }
    }

}

module.exports = loginDelegate;
