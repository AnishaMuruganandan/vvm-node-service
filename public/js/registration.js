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
      if (validationFunction.userName() && validationFunction.userEmailId() && validationFunction.userPhoneNo()) {
        generateandSendOTPService();
      }
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
      if (validationFunction.userPassword()) {
        saveAllDetailsService();
        $registrationUsingEmailPwd.hide();
        $registrationForm.hide();
        $LoginForm.show();
        $loginBtn.hide();
        $registerBn.show();
      }
    });

    $loginBtn.click(function(e) {
      $registrationForm.hide();
      $LoginForm.show();
      $loginBtn.hide();
      $registerBn.show();
      $registrationUsingEmailPwd.hide();
    });

    $registerBn.click(function(e) {
      $LoginForm.hide();
      $registrationForm.show();
      $registerBn.hide();
      $loginBtn.show();
      $OtpGeneration.show();
    });
  };

  let finalise = function() {
    $loginBtn.trigger('click');

    $('.js-example-basic-single').select2();
    $('.date').datetimepicker({
      format: 'DD-MM-YYYY'
    });
    let URL = "profile/top-ten";
    loadProfileJS.showProfileList(URL);
  };

  let generateandSendOTPService = async function() {

    var data = {};
    data.phoneNo = $phoneNo.val();
    var result = await registrationServiceDeclaration.phoneNoValidation(data);

    if (result == true) {
      $OtpGeneration.hide();
      $OtpVerification.show();
      var result = await registrationServiceDeclaration.generateandSendOTPService(data);
      generatedOTP = result;
      alert("OTP Deactivated Use this code: " + generatedOTP);
      console.log("generatedOTP client" + generatedOTP);
    } else {
      alert('User Already registered with this Phone Number or Email ID. Please Call us for Assistance');
    }

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
      "cityId": $city.val(),
      "educationId": $educationalQualification.select2().val(),
      "professionId": $profession.select2().val(),
      "religionId": $religion.select2().val(),
      "casteId": $caste.select2().val(),
      "profilePicture": "http://vivahahvizhamatrimony.com/assets/wedcouple.png"
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
    loadProfileJS.init();
  },

  /*
   * METHOD_NAME : construct
   * AUTHOR : AV
   * DESCRIPTION : Constructing
   */
  _construct: function() {
    loadProfileJS.construct();
  },

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
    registrationObj.finalise();
    securityJS.validateLogin();

    $(document).ready(function() {
      console.log("ready!");
    });
    //  var option = new Option(data.full_name, data.id, true, true);
    // studentSelect.append(option).trigger('change');
    //
    setTimeout(function() {
      $('#loader').fadeOut();
    }, 3000);

  }

};


/* Document on ready */

$(function() {

  registrationJS._init();
  registrationJS._construct();
  registrationJS._complete();
  registrationJS._finalise();

});
