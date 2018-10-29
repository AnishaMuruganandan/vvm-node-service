var express = require('express');
var profileServiceObj = require('../service/profile-service');
var profileObject = require('../objects/profile-obj');
var registrationDelegateObj = require('../delegate-layer/registration-delegate');
var horoscopeDelegateObj = require('../delegate-layer/horoscope-delegate');
var familyDelegateObj = require('../delegate-layer/family-delegate');
var registrationServiceObj = require('../service/registration-service');
var horoscopeServiceObj = require('../service/horoscope-service');
var familyServiceObj = require('../service/family-service');
var loginServiceObj = require('../service/login-service');

var profileDelegate = (function() {

  saveBasicProfileDetails = async function(profileDetails) {
    console.log("save basic dlegate");

    var saveBasicProfileDetailsObj = new profileObject.saveBasicProfileDetailsObj(profileDetails.name,
      profileDetails.dob,
      profileDetails.height,
      profileDetails.cityId,
      profileDetails.educationId,
      profileDetails.professionId,
      profileDetails.religionId,
      profileDetails.casteId,
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


  saveProfileDetails = async function(profileDetails) {
    console.log("sava profile dlegate");

    try {
      var profileInsertion, profileBasicUpdation, horoscopeInsertion, familyInsertion;
      var saveProfileDetailsObj = new profileObject.saveProfileDetailsObj(profileDetails.profileAdditionalData.gender,
        profileDetails.profileAdditionalData.salary,
        profileDetails.profileAdditionalData.complexion,
        profileDetails.profileAdditionalData.address,
        profileDetails.profileAdditionalData.physicallyDisabled,
        profileDetails.profileAdditionalData.languageKnown);
      console.log("del try");
      profileInsertion = await profileServiceObj.saveProfileDetails(saveProfileDetailsObj);
      console.log(profileInsertion.insertId + "profileInsertion");

      if (profileInsertion.insertId > 0) {
        profileDetails.profileAdditionalData.profileId = profileInsertion.insertId;
        profileBasicUpdation = await updateProfileBasicDetails(profileDetails);
        console.log(profileBasicUpdation + "profileBasicUpdation");

        if (profileBasicUpdation.affectedRows > 0) {
          horoscopeInsertion = await horoscopeDelegateObj.saveHoroscopeDetails(profileDetails);
          console.log(horoscopeInsertion.insertId + "horoscopeInsertion");

          if (horoscopeInsertion.insertId > 0) {
            familyInsertion = await familyDelegateObj.saveFamilyDetails(profileDetails);
            console.log(familyInsertion.insertId + "familyInsertion");
          }

        }

      }
      return profileInsertion;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  // updateProfileDetails = async function(profileDetails) {
  //   console.log("dlegate");
  //
  //   try {
  //     var profileUpdation, profileBasicUpdation, horoscopeUpdation, familyUpdation;
  //     var updateProfileDetailsObj = new profileObject.updateProfileDetailsObj(profileDetails.profileBasicdata.profileBasicId,
  //       profileDetails.profileAdditionalData.gender,
  //       profileDetails.profileAdditionalData.salary,
  //       profileDetails.profileAdditionalData.complexion,
  //       profileDetails.profileAdditionalData.address,
  //       profileDetails.profileAdditionalData.physicallyDisabled,
  //       profileDetails.profileAdditionalData.languageKnown);
  //     console.log("del try");
  //     profileUpdation = await profileServiceObj.saveProfileDetails(saveProfileDetailsObj);
  //     console.log(profileUpdation.insertId + "profileUpdation");
  //
  //     if (profileInsertion.affectedRows > 0) {
  //       profileDetails.profileAdditionalData.profileId = profileInsertion.insertId;
  //       profileBasicUpdation = await updateProfileBasicDetails(profileDetails);
  //       console.log(profileBasicUpdation + "profileBasicUpdation");
  //
  //       if (profileBasicUpdation.affectedRows > 0) {
  //         horoscopeUpdation = await horoscopeDelegateObj.saveHoroscopeDetails(profileDetails);
  //         console.log(horoscopeUpdation.insertId + "horoscopeUpdation");
  //
  //         if (horoscopeInsertion.affectedRows > 0) {
  //           familyUpdation = await familyDelegateObj.saveFamilyDetails(profileDetails);
  //           console.log(familyUpdation.insertId + "familyUpdation");
  //         }
  //
  //       }
  //
  //     }
  //     return familyInsertion;
  //   } catch (error) {
  //     console.log(error);
  //     return error;
  //   }
  // };

  getProfileDetailsByProfileId = async function(profileBasicId) {
    console.log("get profile dlegate");
    var profile = {};

    try {
      console.log("del try");

      // get profile basic details  by profile basic id
      var profileBasicData = await getProfileBasicDetailsByProfileId(profileBasicId);
      console.log(profileBasicData + "out delegate");
      profile.profileBasicData = profileBasicData;

      if (profileBasicData[0] != null) {
        var loginData = await getLoginDetails(profileBasicId);
        console.log(loginData + "loginData out delegate");
        profile.loginData = loginData;

        if (profileBasicData[0] != null) {
          var profileDetails = await profileServiceObj.getProfileDetailsByProfileId(profileBasicData[0].profile_id);
          console.log(profileDetails + "out delegate");
          profile.profileAdditionalData = profileDetails;

          if (profileDetails[0] != null) {
            var horoscopeData = await horoscopeServiceObj.getHoroscopeDetailsByProfileId(profileDetails[0].profile_id);
            console.log(horoscopeData + "out delegate");
            profile.horoscopeData = horoscopeData;

            if (horoscopeData[0] != null) {
              var familyDetails = await familyServiceObj.getFamilyDetailsByProfileId(horoscopeData[0].profile_id);
              console.log(familyDetails + "out delegate");
              profile.familyData = familyDetails;
            }

          }
        }

      }
      return profile;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  saveProfilePicture = async function(profilepic) {
    var saveProfilePicObj = new profileObject.saveProfilePicObj(profilepic.picURL, profilepic.profileBasicId);
    console.log("save pic dlegate");
    try {
      console.log("del try");
      var profilePicInsertion = await profileServiceObj.saveProfilePicture(saveProfilePicObj);
      console.log(JSON.stringify(profilePicInsertion) + "profilePicInsertion");
      return profilePicInsertion;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  getProfileBasicDetailsByProfileId = async function(profileId) {
    console.log("get profile basic dlegate by id");
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
    console.log("get profile basic dlegate");
    try {
      console.log(data + "del try");
      var output = await profileServiceObj.getProfileBasicDetails(data);
      console.log(output + "output");
      return output;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  updateProfileBasicDetails = async function(profileDetails) {
    console.log("update profile basic dlegate");
    var updateProfileBasicDetailsObj = new profileObject.updateProfileBasicDetailsObj(profileDetails.profileBasicData.profileBasicId,
      profileDetails.profileAdditionalData.profileId,
      profileDetails.profileBasicData.education,
      profileDetails.profileBasicData.profession,
      profileDetails.profileBasicData.city);

    try {

      var output = await profileServiceObj.updateProfileBasicDetails(updateProfileBasicDetailsObj);
      console.log(output + "output");
      return output;
    } catch (error) {
      console.log(error);
      return error;
    }
  };
  return {
    saveBasicProfileDetails: saveBasicProfileDetails,
    saveProfileDetails: saveProfileDetails,
    getProfileBasicDetails: getProfileBasicDetails,
    getProfileBasicDetailsByProfileId: getProfileBasicDetailsByProfileId,
    updateProfileBasicDetails: updateProfileBasicDetails,
    saveProfilePicture: saveProfilePicture,
    getProfileDetailsByProfileId: getProfileDetailsByProfileId

  }

})();
module.exports = profileDelegate;
