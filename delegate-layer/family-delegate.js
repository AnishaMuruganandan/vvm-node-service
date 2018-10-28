var express = require('express');
var familyServiceObj = require('../service/family-service');
var familyObject = require('../objects/family-obj');

var familyDelegate = (function() {

  saveFamilyDetails = async function(profileDetails) {
    console.log("dlegate");

    try {
      var saveFamilyDetailsObj = new familyObject.saveFamilyDetailsObj(profileDetails.profileAdditionalData.profileId,
        profileDetails.familyData.fatherName,
        profileDetails.familyData.motherName,
        profileDetails.familyData.siblingCount,
        profileDetails.familyData.motherTongue,
        profileDetails.familyData.nativePalce);
      console.log("del try");
      var familyInsertion = await familyServiceObj.saveFamilyDetails(saveFamilyDetailsObj);
      console.log(familyInsertion.insertId + "familyInsertion");
      return familyInsertion;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  return {
    saveFamilyDetails: saveFamilyDetails
  }

})();


module.exports = familyDelegate;
