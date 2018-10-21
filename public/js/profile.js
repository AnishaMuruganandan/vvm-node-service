/* FILE_NAME : registration.js FOLDER : public/js/registration DESCRIPTION : AUTHOR : ANN NOTES : */
let profileFunc = (function() {
  let FILE_NAME = "profileJS";


  let init = function() {

    $logoutAct = $('#logoutAct');
    $editbtn = $('#editbtn');
    $savebtn = $('#savebtn');
    $cancelbtn = $('#cancelbtn');

    $inputbox = $('.inputbox');

  };

  let construct = function() {};

  let complete = function() {

    $editbtn.click(function(e) {
      $inputbox.attr('readonly', false);
      $editbtn.css("display", "none");
      $savebtn.css("display", "block");
      $cancelbtn.css("display", "block");
    });

    $savebtn.click(function(e) {
      $inputbox.attr('readonly', true);
      $editbtn.css("display", "block");
      $savebtn.css("display", "none");
      $cancelbtn.css("display", "none");
    });

    $cancelbtn.click(function(e) {
      $inputbox.attr('readonly', true);
      $editbtn.css("display", "block");
      $savebtn.css("display", "none");
      $cancelbtn.css("display", "none");
    });





    /*
     * Registraion Form submit listener
     */
    $logoutAct.click(function(e) {
      logoutService();
    });



  };

  let finalise = function() {};


  let logoutService = function() {

    window.location.href = "./index.html";

  };


  return {
    init: init,
    construct: construct,
    complete: complete,
    finalise: finalise
  };
});

var profileJS = {

  /*
   * METHOD_NAME : init
   * AUTHOR : AV
   * DESCRIPTION : Initiating
   */
  _init: function() {

    profileObj = profileFunc();
    profileObj.init();

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
    profileObj.complete();
  },

  /*
   * METHOD_NAME : _finalise
   * AUTHOR : AV
   * DESCRIPTION : Finalize
   */
  _finalise: function() {

  }

};

/* Document on ready */

$(function() {

  profileJS._init();
  profileJS._construct();
  profileJS._complete();
  profileJS._finalise();

});
