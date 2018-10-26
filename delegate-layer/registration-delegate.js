var express = require('express');
var registrationServiceObj = require('../service/registration-service');
var registrationObject = require('../objects/registration-obj');
var otpObj = require('../util/otp');

var registrationDelegate = (function() {

  verifyEmailId = async function(emailId) {
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
  };

  verifyPhoneNo = async function(phoneNo) {
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
  };

  saveRegistrationDetails = async function(registrationDetails) {
    console.log("dlegate");
    var otp = 0;
    var saveRegistrationDetailsObj = new registrationObject.saveRegistrationDetailsObj(registrationDetails.profileBasicId, registrationDetails.emailId, registrationDetails.phoneNo, otp, registrationDetails.emailId, registrationDetails.password);
    try {
      console.log("del try");
      var output = await registrationServiceObj.saveRegistrationDetails(saveRegistrationDetailsObj);
      console.log(output + "out delegate");
      return output;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  updatePassword = async function(emailId, registrationDetails) {
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
  };

  updateProfileId = async function(loginId, registrationDetails) {
    console.log("dlegate");
    var updateProfileIdObj = new registrationObject.updateProfileIdObj(loginId, registrationDetails.profileId);
    try {
      console.log("del try");
      var output = await registrationServiceObj.updateProfileId(updateProfileIdObj);
      console.log(output + "out delegate");
      return output;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  sendOTP = function(contactDetails) {
    console.log("dlegate");

    try {
      console.log("del try");
      var generatedOTP = otpObj.OTPGeneration();
      console.log(generatedOTP + "generatedOTP");
      var messageStatus = otpObj.SendingOTP(generatedOTP, contactDetails.phoneNo);
      console.log(messageStatus + "messageStatus");

      return generatedOTP;

    } catch (error) {
      console.log(error);
      return error;
    }
  };

  return {
    verifyEmailId: verifyEmailId,
    verifyPhoneNo: verifyPhoneNo,
    saveRegistrationDetails: saveRegistrationDetails,
    updatePassword: updatePassword,
    updateProfileId: updateProfileId,
    sendOTP: sendOTP
  }

})();


module.exports = registrationDelegate;
