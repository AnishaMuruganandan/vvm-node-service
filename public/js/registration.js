/* FILE_NAME : registration.js FOLDER : public/js/registration DESCRIPTION : AUTHOR : ANN NOTES : */
let registrationFunc = (function() {
  let FILE_NAME = "registrationJS";

  let $registrationForm;

  let init = function() {

    $name = $('#name');
    $emailId = $('#emailId');
    $password = $('#password');
    $phoneNo = $('#phoneNo');
    $dob = $('#dob');
    $height = $('#height');
    $city = $('#city');
    $educationalQualification = $('#educationalQualification');
    $profession = $('#profession');
    $religion = $('#religion');
    $caste = $('#caste');
    $otp = $('#otp');
    $generateandSendOTP = $('#generateandSendOTP');
    $verifyOTP = $('#verifyOTP');
    $registrationForm = $('#registrationForm');
    $OtpGeneration = $('#OtpGeneration');
    $OtpVerification = $('#OtpVerification');
    $registrationUsingEmailPwd = $('#registrationUsingEmailPwd');
    $register = $('#register');
    $LoginForm = $('#LoginForm');
    $loginBtn = $('#loginBtn');
    $resendOTP = $('#resendOTP');
    $registerBn = $('#registerBn');
    var generatedOTP;
  };

  let construct = function() {};

  let complete = function() {

    /*
     * Registraion Form submit listener
     */
    $generateandSendOTP.click(function(e) {
      generateandSendOTPService();
      $OtpGeneration.hide();
      $OtpVerification.show();
    });

    $resendOTP.click(function(e) {
      generateandSendOTPService();
      $OtpGeneration.hide();
      $OtpVerification.show();
    });

    $verifyOTP.click(function(e) {
      verifyOTPService();
    });

    $register.click(function(e) {
      saveAllDetailsService();
      $registrationUsingEmailPwd.hide();
      $registrationForm.hide();
      $LoginForm.show();
      $loginBtn.hide();
      $registerBn.show();
    });

    $loginBtn.click(function(e) {
      $registrationForm.hide();
      $LoginForm.show();
      $loginBtn.hide();
      $registerBn.show();
    });

    $registerBn.click(function(e) {
      $LoginForm.hide();
      $registrationForm.show();
      $registerBn.hide();
      $loginBtn.show();
      $OtpGeneration.show();
    });
  };

  let finalise = function() {};

  let generateandSendOTPService = async function() {

    var data = {};
    data.phoneNo = $phoneNo.val();
    var result = await registrationServiceDeclaration.generateandSendOTPService(data);
    generatedOTP = result;
    console.log("generatedOTP client" + generatedOTP);

  };

  let verifyOTPService = function() {
    var userEnteredOTP = $otp.val();
    console.log(generatedOTP + "gen otp");
    console.log(userEnteredOTP + "user otp");
    if (userEnteredOTP == generatedOTP) {
      $OtpVerification.hide();
      $registrationUsingEmailPwd.show();
    } else {
      alert("wrong otp");
    }
  };

  let saveAllDetailsService = async function() {
    var data = {
      "name": $name.val(),
      "emailId": $emailId.val(),
      "phoneNo": $phoneNo.val(),
      "password": $password.val(),
      "dob": $dob.val(),
      "height": $height.val(),
      "city": $city.val(),
      "educationalQualification": $educationalQualification.val(),
      "profession": $profession.val(),
      "religion": $religion.val(),
      "caste": $caste.val(),
      "profilePicture": "www.adf.com"
    }
    var result = await registrationServiceDeclaration.saveAllDetailsService(data);
    console.log(result + "fearesult");
  };
  return {
    init: init,
    construct: construct,
    complete: complete,
    finalise: finalise
  };
});

var registrationJS = {

  /*
   * METHOD_NAME : init
   * AUTHOR : AV
   * DESCRIPTION : Initiating
   */
  _init: function() {

    registrationObj = new registrationFunc();
    registrationObj.init();

  },

  /*
   * METHOD_NAME : construct
   * AUTHOR : AV
   * DESCRIPTION : Constructing
   */
  _construct: function() {},

  /*
   * METHOD_NAME : _complete
   * AUTHOR : AV
   * DESCRIPTION : Complete
   */
  _complete: function() {
    registrationObj.complete();
  },

  /*
   * METHOD_NAME : _finalise
   * AUTHOR : AV
   * DESCRIPTION : Finalize
   */
  _finalise: function() {
    securityJS.validateLogin();
  }

};

/* Document on ready */

$(function() {

  registrationJS._init();
  registrationJS._construct();
  registrationJS._complete();
  registrationJS._finalise();

});
