var express = require('express');
var profileServiceObj = require('../service/profile-service');
var profileObject = require('../objects/profile-obj');
var registrationDelegateObj = require('../delegate-layer/registration-delegate');
var registrationServiceObj = require('../service/registration-service');

var profileDelegate = (function() {

  saveBasicProfileDetails = async function(profileDetails) {
    console.log("dlegate");
    var saveBasicProfileDetailsObj = new profileObject.saveBasicProfileDetailsObj(profileDetails.name,
      profileDetails.dob,
      profileDetails.height,
      profileDetails.city,
      profileDetails.educationalQualification,
      profileDetails.profession,
      profileDetails.religion,
      profileDetails.caste,
      profileDetails.profilePicture);
    try {
      var output;

      console.log("del try");
      var profileInsertion = await profileServiceObj.saveBasicProfileDetails(saveBasicProfileDetailsObj);

        console.log(profileInsertion.insertId + "profileInsertion");

        if (profileInsertion.insertId > 0) {
          var data = profileDetails;
          data.profileBasicId = profileInsertion.insertId;
          output = await registrationDelegateObj.saveRegistrationDetails(data);
        }

      console.log(JSON.stringify(output) + "out delegate");
      return output;

    } catch (error) {
      console.log(error);
      return error;
    }
  };


  saveMoreProfileDetails = async function(profileDetails) {
    console.log("dlegate");
    var saveProfileDetailsObj = new profileObject.saveProfileDetailsObj(profileDetails.name,
      profileDetails.dob,
      profileDetails.age,
      profileDetails.religionId,
      profileDetails.gender,
      profileDetails.educationId,
      profileDetails.professionId,
      profileDetails.salaryId,
      profileDetails.height,
      profileDetails.complexion,
      profileDetails.cityId,
      profileDetails.address,
      profileDetails.physicalDisablity,
      profileDetails.profilePicture);
    try {
      console.log("del try");
      var output = await profileServiceObj.saveProfileDetails(saveProfileDetailsObj);
      console.log(output + "out delegate");
      return output;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  // getProfileDetailsByProfileId = async function(profileId) {
  //   console.log("dlegate");
  //   try {
  //     console.log("del try");
  //     var output = await profileServiceObj.getProfileDetailsByProfileId();
  //     console.log(output + "out delegate");
  //     return output;
  //   } catch (error) {
  //     console.log(error);
  //     return error;
  //   }
  // };

  getProfileBasicDetailsByProfileId = async function(profileId) {
    console.log("dlegate");
    try {
      console.log("del try");
      var output = await profileServiceObj.getProfileBasicDetailsByProfileId(profileId);
      console.log(output + "out delegate");
      return output;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

    getProfileBasicDetails = async function(data) {
      console.log("dlegate");
      try {
        console.log(data+"del try" );
        var output = await profileServiceObj.getProfileBasicDetails(data);
        console.log(output + "output");
        return output;
      } catch (error) {
        console.log(error);
        return error;
      }
    };

  return {
    saveBasicProfileDetails: saveBasicProfileDetails,
    getProfileBasicDetails: getProfileBasicDetails,
    getProfileBasicDetailsByProfileId: getProfileBasicDetailsByProfileId
  }

})();
module.exports = profileDelegate;
