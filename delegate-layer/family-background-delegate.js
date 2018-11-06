var express = require('express');
var familyBackgroundServiceObj = require('../service/family-background-service');
var familyBackgroundObject = require('../objects/family-background-obj');

var familyBackgroundDelegate = (function() {

  saveFamilyBackgroundDetails = async function(profileDetails) {
    console.log("dlegate");

    try {

      let arrlength = profileDetails.familyBackgroundData.siblingsDetails.length;

      for (var i = 0; i < arrlength; i++) {

        var saveFamilyBackgroundDetailsObj = new familyBackgroundObject.saveFamilyBackgroundDetailsObj(profileDetails.profileAdditionalData.profileId,
          profileDetails.familyBackgroundData.siblingsDetails[i].type,
          profileDetails.familyBackgroundData.siblingsDetails[i].age,
          profileDetails.familyBackgroundData.siblingsDetails[i].maritalStatus);
        console.log("del try");
        var familyBackgroundInsertion = await familyBackgroundServiceObj.saveFamilyBackgroundDetails(saveFamilyBackgroundDetailsObj);
        console.log(familyBackgroundInsertion.insertId + "familyBackgroundInsertion");

      }

      return familyInsertion;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  return {
    saveFamilyBackgroundDetails: saveFamilyBackgroundDetails
  }

})();


module.exports = familyBackgroundDelegate;
