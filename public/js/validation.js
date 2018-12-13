var validationFunction = (function() {

  $name = $('#name');
  $emailId = $('#emailId');
  $phoneNo = $('#phoneNo');
  $profession = $('#profession');
  $education = $('#education');
  $religion = $('#religion');
  $caste = $('#caste');
  $dob = $('#dob');
  $gender = $('#gender');
  $height = $('#height');
  $complexion = $('#complexion');
  $salary = $('#salary');
  $cityLiving = $('#cityLiving');
  $nativePlace = $('#nativePlace');
  $physicallyDisabled = $('#physicallyDisabled');
  $motherTongue = $('#motherTongue');
  $languageKnown = $('#languageKnown');
  $rasi = $('#rasi');
  $nakshatra = $('#nakshatra');
  $lagna = $('#lagna');
  $paagam = $('#paagam');
  $pob = $('#pob');
  $tob = $('#tob');
  $fName = $('#fName');
  $mName = $('#mName');
  $sibCount = $('#sibCount');
  $address = $('#address');
  $aboutMe = $('#aboutMe');
  $expectations = $('#expectations');

  $name.focusout(function() {
    userName();
  });

  $emailId.focusout(function() {
    userEmailId();
  });

  $phoneNo.focusout(function() {
    userPhoneNo();
  });

  $profession.focusout(function() {
    userProfession();
  });

  $education.focusout(function() {
    userEducation();
  });

  $religion.focusout(function() {
    userReligion();
  });

  $caste.focusout(function() {
    userCaste();
  });

  $dob.focusout(function() {
    userDob();
  });

  $gender.focusout(function() {
    userGender();
  });

  function userName() {
    // console.log($name.val() + "name");
    var userNameValidationVal = regexCheckJS.userNameValidation($name.val());
    if (userNameValidationVal == false) {
      $name.focus();
      return false;
    } else {
      return true;
    }
  }

  function userEmailId() {
    // console.log($emailId.val() + "$emailId");
    var userEmailIdValidationVal = regexCheckJS.userEmailIdValidation($emailId.val());
    if (userEmailIdValidationVal == false) {
      $emailId.focus();
      return false;
    } else {
      return true;
    }
  }

  function userPhoneNo() {
    // console.log($phoneNo.val() + "$phoneNo");
    var userPhoneNoValidationVal = regexCheckJS.userPhoneNoValidation($phoneNo.val());
    if (userPhoneNoValidationVal == false) {
      $phoneNo.focus();
      return false;
    } else {
      return true;
    }
  }

  function userProfession() {
    // console.log($profession.select2().val() + "$phoneNo");
    var userProfessionValidationVal = regexCheckJS.userProfessionValidation($profession.select2().val());
    if (userProfessionValidationVal == false) {
      $profession.focus();
      return false;
    } else {
      return true;
    }
  }

  function userEducation() {
    // console.log($education.select2().val() + "$phoneNo");
    var userEducationValidationVal = regexCheckJS.userEducationValidation($education.select2().val());
    if (userEducationValidationVal == false) {
      $education.focus();
      return false;
    } else {
      return true;
    }
  }

  function useReligion() {
    // console.log($religion.select2().val() + "$phoneNo");
    var useReligionValidationVal = regexCheckJS.useReligionValidation($religion.select2().val());
    if (useReligionValidationVal == false) {
      $religion.focus();
      return false;
    } else {
      return true;
    }
  }

  function userCaste() {
    // console.log($caste.select2().val() + "$phoneNo");
    var userCasteValidationVal = regexCheckJS.userCasteValidation($caste.select2().val());
    if (userCasteValidationVal == false) {
      $caste.focus();
      return false;
    } else {
      return true;
    }
  }

  return {
    userName: userName,
    userEmailId: userEmailId,
    userPhoneNo: userPhoneNo
  }

})();
