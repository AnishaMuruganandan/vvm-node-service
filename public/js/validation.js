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
$password = $('#password');


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

  $height.focusout(function() {
    userHeight();
  });

  // $complexion.focusout(function() {
  //   userComplexion();
  // });

  // $salary.focusout(function() {
  //   userSalary();
  // });
  //
  // $cityLiving.focusout(function() {
  //   userCityLiving();
  // });

  $nativePlace.focusout(function() {
    userNativePlace();
  });

  // $physicallyDisabled.focusout(function() {
  //   userPhysicallyDisabled();
  // });
  //
  // $motherTongue.focusout(function() {
  //   userMotherTongue();
  // });
  //
  // $languageKnown.focusout(function() {
  //   userLanguageKnown();
  // });
  //
  // $rasi.focusout(function() {
  //   userRasi();
  // });
  //
  // $nakshatra.focusout(function() {
  //   userNakshatra();
  // });
  //
  // $lagna.focusout(function() {
  //   userLagna();
  // });
  //
  // $paagam.focusout(function() {
  //   userPaagam();
  // });

  $pob.focusout(function() {
    userPob();
  });

  $tob.focusout(function() {
    userTob();
  });

  $fName.focusout(function() {
    userFName();
  });

  $mName.focusout(function() {
    userMName();
  });

  // $sibCount.focusout(function() {
  //   userSibCount();
  // });

  $address.focusout(function() {
    userAddress();
  });

  $aboutMe.focusout(function() {
    userAboutMe();
  });

  $expectations.focusout(function() {
    userExpectations();
  });

  $password.focusout(function() {
    userPassword();
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
    // console.log($profession.select2().val() + "$profession");
    var userProfessionValidationVal = regexCheckJS.userProfessionValidation($profession.select2().val());
    if (userProfessionValidationVal == false) {
      $profession.focus();
      return false;
    } else {
      return true;
    }
  }

  function userEducation() {
    // console.log($education.select2().val() + "$education");
    var userEducationValidationVal = regexCheckJS.userEducationValidation($education.select2().val());
    if (userEducationValidationVal == false) {
      $education.focus();
      return false;
    } else {
      return true;
    }
  }

  function userReligion() {
    // console.log($religion.select2().val() + "$religion");
    var useReligionValidationVal = regexCheckJS.useReligionValidation($religion.select2().val());
    if (useReligionValidationVal == false) {
      $religion.focus();
      return false;
    } else {
      return true;
    }
  }

  function userCaste() {
    // console.log($caste.select2().val() + "$caste");
    var userCasteValidationVal = regexCheckJS.userCasteValidation($caste.select2().val());
    if (userCasteValidationVal == false) {
      $caste.focus();
      return false;
    } else {
      return true;
    }
  }

  function userDob() {
    // console.log($dob.val() + "$dob");
    var userDobValidationVal = regexCheckJS.userDobValidation($dob.val());
    if (userDobValidationVal == false) {
      $caste.focus();
      return false;
    } else {
      return true;
    }
  }

  function userGender() {
    console.log($gender.select2().val() + "$gender");


    var userGenderValidationVal = regexCheckJS.userGenderValidation($gender.select2().val());
    if (userGenderValidationVal == false) {

      return false;
    } else {
      return true;
    }
  }

  function userHeight() {
    // console.log($height().val() + "$height");
    var userHeightValidationVal = regexCheckJS.userHeightValidation($height.val());
    if (userHeightValidationVal == false) {
      $height.focus();
      return false;
    } else {
      return true;
    }
  }

  function userComplexion() {
    // console.log($complexion().select2().val() + "$complexion");
    var userComplexionValidationVal = regexCheckJS.userComplexionValidation($complexion.select2().val());
    if (userComplexionValidationVal == false) {
      $complexion.focus();
      return false;
    } else {
      return true;
    }
  }

  function userSalary() {
    // console.log($salary().select2().val() + "$salary");
    var userSalaryValidationVal = regexCheckJS.userSalaryValidation($salary.select2().val());
    if (userSalaryValidationVal == false) {
      $salary.focus();
      return false;
    } else {
      return true;
    }
  }

  function userCityLiving() {
    // console.log($cityLiving.select2().val() + "$cityLiving");
    var userCityLivingValidationVal = regexCheckJS.userCityLivingValidation($cityLiving.select2().val());
    if (userCityLivingValidationVal == false) {
      $cityLiving.focus();
      return false;
    } else {
      return true;
    }
  }

  function userNativePlace() {
    // console.log($nativePlace().val() + "$salary");
    var userNativePlaceValidationVal = regexCheckJS.userNativePlaceValidation($nativePlace.val());
    if (userNativePlaceValidationVal == false) {
      $nativePlace.focus();
      return false;
    } else {
      return true;
    }
  }

  function userPhysicallyDisabled() {
    // console.log($nativePlace().val() + "$salary");
    var userPhysicallyDisabledValidationVal = regexCheckJS.userPhysicallyDisabledValidation($physicallyDisabled.select2().val());
    if (userPhysicallyDisabledValidationVal == false) {
      $physicallyDisabled.focus();
      return false;
    } else {
      return true;
    }
  }

  function userMotherTongue() {
    // console.log($motherTongue().val() + "$motherTongue");
    var userMotherTongueValidationVal = regexCheckJS.userMotherTongueValidation($motherTongue.select2().val());
    if (userMotherTongueValidationVal == false) {
      $motherTongue.focus();
      return false;
    } else {
      return true;
    }
  }

  function userLanguageKnown() {
    // console.log($motherTongue().val() + "$motherTongue");
    var userLanguageKnownValidationVal = regexCheckJS.userLanguageKnownValidation($languageKnown.select2().val());
    if (userLanguageKnownValidationVal == false) {
      $languageKnown.focus();
      return false;
    } else {
      return true;
    }
  }

  function userRasi() {
    // console.log($rasi().val() + "$rasi");
    var userRasiValidationVal = regexCheckJS.userRasiValidation($rasi.select2().val());
    if (userRasiValidationVal == false) {
      $rasi.focus();
      return false;
    } else {
      return true;
    }
  }

  function userNakshatra() {
    // console.log($rasi().val() + "$nakshatra");
    var userNakshatraValidationVal = regexCheckJS.userNakshatraValidation($nakshatra.select2().val());
    if (userNakshatraValidationVal == false) {
      $nakshatra.focus();
      return false;
    } else {
      return true;
    }
  }

  function userLagna() {
    // console.log($lagna.select2().val())+ "$lagna");
    var userLagnaValidationVal = regexCheckJS.userLagnaValidation($lagna.select2().val());
    if (userLagnaValidationVal == false) {
      $lagna.focus();
      return false;
    } else {
      return true;
    }
  }

  function userPaagam() {
    // console.log($paagam.select2().val() + "$paagam");
    var userPaagamValidationVal = regexCheckJS.userPaagamValidation($paagam.select2().val());
    if (userPaagamValidationVal == false) {
      $paagam.focus();
      return false;
    } else {
      return true;
    }
  }

  function userPob() {
    // console.log($pob.val() + "$pob");
    var userPobValidationVal = regexCheckJS.userPobValidation($pob.val());
    if (userPobValidationVal == false) {
      $pob.focus();
      return false;
    } else {
      return true;
    }
  }

  function userTob() {
    // console.log($tob.val() + "$tob");
    var userTobValidationVal = regexCheckJS.userTobValidation($tob.val());
    if (userTobValidationVal == false) {
      $tob.focus();
      return false;
    } else {
      return true;
    }
  }

  function userFName() {
    // console.log($fName.val() + "$fName");
    var userFNameValidationVal = regexCheckJS.userFNameValidation($fName.val());
    if (userFNameValidationVal == false) {
      $fName.focus();
      return false;
    } else {
      return true;
    }
  }

  function userMName() {
    // console.log($mName.val() + "$mName");
    var userMNameValidationVal = regexCheckJS.userMNameValidation($mName.val());
    if (userMNameValidationVal == false) {
      $mName.focus();
      return false;
    } else {
      return true;
    }
  }

  function userSibCount() {
    console.log($sibCount.select2().val() + "$sibCount");
    var userSibCountValidationVal = regexCheckJS.userSibCountValidation($sibCount.select2().val());
    if (userSibCountValidationVal == false) {
      return false;
    } else {
      return true;
    }
  }

  function userAddress() {
    // console.log($address.val() + "$address");
    var userAddressValidationVal = regexCheckJS.userAddressValidation($address.val());
    if (userAddressValidationVal == false) {
      $address.focus();
      return false;
    } else {
      return true;
    }
  }


  function userAboutMe() {
    console.log($aboutMe.val() + "$aboutMe");
    var userAboutMeValidationVal = regexCheckJS.userAboutMeValidation($aboutMe.val());
    if (userAboutMeValidationVal == false) {
      $aboutMe.focus();
      return false;
    } else {
      return true;
    }
  }

  function userExpectations() {
    // console.log($expectations.val() + "$expectations");
    var userExpectationsValidationVal = regexCheckJS.userExpectationsValidation($expectations.val());
    if (userExpectationsValidationVal == false) {
      $expectations.focus();
      return false;
    } else {
      return true;
    }
  }

  function userPassword() {
    // console.log($expectations.val() + "$expectations");
    var userPasswordValidationVal = regexCheckJS.userPasswordValidation($password.val());
    if (userPasswordValidationVal == false) {
      $password.focus();
      return false;
    } else {
      return true;
    }
  }


  function userSiblingDetails() {
    let siblingsDetails = [];
    var siblingTypeArr = [];
    var siblingAgeArr = [];
    var siblingMaritalStatusArr = [];

    $("select[name='siblingType']").each(function() {
      siblingTypeArr.push($(this).val());
    });
    $("select[name='siblingAge']").each(function() {
      siblingAgeArr.push($(this).val());
    });
    $("select[name='siblingMaritalStatus']").each(function() {
      siblingMaritalStatusArr.push($(this).val());
    });


    for (let i = 0; i < siblingTypeArr.length; i++) {
      let sibling = {

        type: siblingTypeArr[i],
        age: siblingAgeArr[i],
        maritalStatus: siblingMaritalStatusArr[i]
      };
      siblingsDetails.push(sibling);
    }

    console.log(siblingsDetails + "siblingsDetails");
    var userSiblingDetailsValidationVal = regexCheckJS.userSiblingDetailsValidation(siblingsDetails);
    if (userSiblingDetailsValidationVal == false) {

      return false;
    } else {
      return true;
    }
  }

  return {
    userName: userName,
    userEmailId: userEmailId,
    userPhoneNo: userPhoneNo,
    userProfession: userProfession,
    userEducation: userEducation,
    userReligion: userReligion,
    userCaste: userCaste,
    userDob: userDob,
    userGender: userGender,
    userHeight: userHeight,
    userComplexion: userComplexion,
    userSalary: userSalary,
    userCityLiving: userCityLiving,
    userNativePlace: userNativePlace,
    userPhysicallyDisabled: userPhysicallyDisabled,
    userMotherTongue: userMotherTongue,
    userLanguageKnown: userLanguageKnown,
    userRasi: userRasi,
    userNakshatra: userNakshatra,
    userLagna: userLagna,
    userPaagam: userPaagam,
    userPob: userPob,
    userTob: userTob,
    userFName: userFName,
    userMName: userMName,
    userSibCount: userSibCount,
    userAddress: userAddress,
    userAboutMe: userAboutMe,
    userExpectations: userExpectations,
    userSiblingDetails: userSiblingDetails,
    userPassword : userPassword
  }

})();
