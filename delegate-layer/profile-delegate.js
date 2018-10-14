var express = require('express');
var profileServiceObj = require('../service/profile-service');
var profileObject = require('../objects/profile-obj');

var profileDelegate = {

  saveProfileDetails: async function(profileDetails) {
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
  }

}
module.exports = profileDelegate;
