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

  let finalise = function() {};


  let loginService = function(){
    var data = {
    "loginPhoneNo" : $loginPhoneNo.val(),
    "loginPassword" : $loginPassword.val()
  }
    var result = loginServiceDeclaration.verifyLoginDetailsService(data);

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
