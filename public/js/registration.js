/* FILE_NAME : registration.js FOLDER : public/js/registration DESCRIPTION : AUTHOR : ANN NOTES : */
let loginFunc = (function() {
  let FILE_NAME = "registrationJS";

  let $registrationForm;

  let init = function() {

    $emailId = $('#emailId');
    $password = $('#password');
    $registrationForm = $('#registrationForm');
  };

  let construct = function() {};

  let complete = function() {

    /*
     * Registraion Form submit listener
     */
    $loginBtn.click(function(e) {

invokeAjaxLoginService();

    });
  };

  let finalise = function() {};

  let invokeAjaxLoginService = function(){

    var data = {
      "" : $userName.val(),
      "" : $
    }


  var result =  serviceDeclarationJS.loginAjaxService();


  res

  };

  return {init: init, construct: construct, complete: complete, finalise: finalise};
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
