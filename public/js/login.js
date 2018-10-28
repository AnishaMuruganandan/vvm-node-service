/* FILE_NAME : registration.js FOLDER : public/js/registration DESCRIPTION : AUTHOR : ANN NOTES : */
let loginFunc = (function() {
  let FILE_NAME = "loginJS";


  let init = function() {

    $loginPhoneNo = $('#loginPhoneNo');
    $loginPassword = $('#loginPassword');
    $LoginForm = $('#LoginForm');
    $LoginForm = $('#LoginForm');
    $loginButton = $('#loginButton');
  };

  let construct = function() {};

  let complete = function() {

    /*
     * Registraion Form submit listener
     */
    $loginButton.click(function(e) {
      loginService();
    });



  };

  let finalise = function() {

  };


  let loginService = async function() {
    var data = {};
    data.loginPhoneNo = $loginPhoneNo.val();
    data.loginPassword = $loginPassword.val();

    var result = await loginServiceDeclaration.verifyLoginDetailsService(data);
    if (result.msg == "found") {
      securityJS.addCookie("LOGIN_SALT", "true");
      securityJS.addCookie("PROFILE_BASIC_ID", result.profileBasicId);
      securityJS.addCookie("PROFILE_ID", result.profileId);
      console.log(result.profileBasicId + "pbid");
      window.location.href = "./profile.html";


    } else
      alert("Invalid Phone Number or Password");
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
    loginObj.finalise();
    securityJS.validateLogin();
  }

};

/* Document on ready */

$(function() {

  loginJS._init();
  loginJS._construct();
  loginJS._complete();
  loginJS._finalise();

});
