/* FILE_NAME : registration.js FOLDER : public/js/registration DESCRIPTION : AUTHOR : ANN NOTES : */
let loginFunc = (function() {
  let FILE_NAME = "registrationJS";

  let $registrationForm;

  let init = function() {

    $emailId = $('#emailId');
    $password = $('#password');
    $phoneNo = $('#phoneNo');
    $otp = $('#otp');
    $generateandSendOTP = $('#generateandSendOTP');
    $verifyOTP = $('#verifyOTP');
    $registrationForm = $('#registrationForm');
    $OtpGeneration = $('#OtpGeneration');
    $OtpVerification = $('#OtpVerification');
    $registrationUsingEmailPwd = $('#registrationUsingEmailPwd');
    $register = $('#register');
    $LoginForm = $('#LoginForm');
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


    $verifyOTP.click(function(e) {
      verifyOTPService();
    });

    $register.click(function(e){
      saveAllDetailsService();
       $registrationUsingEmailPwd.hide();
       $registrationForm.hide();
$LoginForm.show();
    });
  };

  let finalise = function() {};

  let generateandSendOTPService = function() {

    var data = {};
    data.phoneNo = $phoneNo.val();
    var result = registraionServiceDeclaration.generateandSendOTPService(data);
    generatedOTP = result;

  };

  let verifyOTPService = function(){
   var userEnteredOTP = $otp.val();
   if(userEnteredOTP == generatedOTP){
     $OtpVerification.hide();
     $registrationUsingEmailPwd.show();
   }
   else {
     alert("wrong otp");
   }
  };

  let saveAllDetailsService = function(){
    var data = {
    "phoneNo" = $phoneNo.val();
    "emailId" = $emailId.val();
    "password" = $password.val();
    var result = registraionServiceDeclaration.saveAllDetailsService(data);
  }
  };
  return {
    init: init,
    construct: construct,
    complete: complete,
    finalise: finalise
  };
});

var loginJS = {

  /*
   * METHOD_NAME : init
   * AUTHOR : AV
   * DESCRIPTION : Initiating
   */
  _init: function() {

    loginObj = loginFunc();
    loginObj.init();

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
    loginObj.complete();
  },

  /*
   * METHOD_NAME : _finalise
   * AUTHOR : AV
   * DESCRIPTION : Finalize
   */
  _finalise: function() {
    utilsJS.toggleLoader();
  }

};

/* Document on ready */

$(function() {

  loginJS._init();
  loginJS._construct();
  loginJS._complete();
  loginJS._finalise();

});
