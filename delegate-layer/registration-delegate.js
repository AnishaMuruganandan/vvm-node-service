var express = require('express');
var registrationServiceObj = require('../service/registration-service');
var registrationObject = require('../objects/registration-obj')

var registrationDelegate = {

  verifyEmailId: async function(emailId) {
    console.log("dlegate");
    var verfiyEmailIdObj = new registrationObject.verifyEmailIdObj(emailId);
    try {
      console.log("del try");
      var output = await registrationServiceObj.verifyEmailId(verfiyEmailIdObj);
      console.log(output + "out delegate");
      return output;
    } catch (error) {
      console.log(error);
      return error;
    }
  },

  verifyPhoneNo: async function(phoneNo) {
    console.log("dlegate");
    var verifyPhoneNoObj = new registrationObject.verifyPhoneNoObj(phoneNo);
    try {
      console.log("del try");
      var output = await registrationServiceObj.verifyPhoneNo(verifyPhoneNoObj);
      console.log(output + "out delegate");
      return output;
    } catch (error) {
      console.log(error);
      return error;
    }
  },

  saveRegistrationDetails: async function(registrationDetails) {
    console.log("dlegate");
    var saveRegistrationDetailsObj = new registrationObject.saveRegistrationDetailsObj(registrationDetails.emailId, registrationDetails.phoneNo, registrationDetails.otp, registrationDetails.username, registrationDetails.password);
    try {
      console.log("del try");
      var output = await registrationServiceObj.saveRegistrationDetails(saveRegistrationDetailsObj);
      console.log(output + "out delegate");
      return output;
    } catch (error) {
      console.log(error);
      return error;
    }
  },

updatePassword : async function(emailId, registrationDetails) {
  console.log("dlegate");
  var updatePasswordObj = new registrationObject.updatePasswordObj(emailId, registrationDetails.password);
  try {
    console.log("del try");
    var output = await registrationServiceObj.updatePassword(updatePasswordObj);
    console.log(output + "out delegate");
    return output;
  } catch (error) {
    console.log(error);
    return error;
  }
},

}
module.exports = registrationDelegate;
