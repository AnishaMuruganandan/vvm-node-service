var express = require('express');
var horoscopeServiceObj = require('../service/horoscope-service');
var horoscopeObject = require('../objects/horoscope-obj');

var horoscopeDelegate = (function() {

  saveHoroscopeDetails = async function(profileDetails) {
    console.log("dlegate");

    try {
      var saveHoroscopeDetailsObj = new horoscopeObject.saveHoroscopeDetailsObj(profileDetails.profileAdditionalData.profileId,
        profileDetails.horoscopeData.jathagamSoftCopy,
        profileDetails.horoscopeData.tob,
        profileDetails.horoscopeData.pob,
        profileDetails.horoscopeData.zodiac,
        profileDetails.horoscopeData.star,
        profileDetails.horoscopeData.lagna);
      console.log("del try");
      var horoscopeInsertion = await horoscopeServiceObj.saveHoroscopeDetails(saveHoroscopeDetailsObj);
      console.log(horoscopeInsertion.insertId + "horoscopeInsertion");
      return horoscopeInsertion;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  return {
    saveHoroscopeDetails: saveHoroscopeDetails
  }

})();


module.exports = horoscopeDelegate;
