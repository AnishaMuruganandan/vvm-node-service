/* FILE_NAME : registration.js FOLDER : public/js/registration DESCRIPTION : AUTHOR : ANN NOTES : */
let profileFunc = (function() {
  let FILE_NAME = "profileJS";


  let init = function() {

    $logoutAct = $('#logoutAct');
    $editbtn = $('#editbtn');
    $savebtn = $('#savebtn');
    $cancelbtn = $('#cancelbtn');
    $clockInput = $('#clock-input');
    $fieldbox = $('.bodycontent input ,.bodycontent select');
    $uploadWidgetOpener = $('#upload_widget_opener');

  };

  let construct = function() {};

  let complete = function() {

    $editbtn.click(function(e) {
      $fieldbox.attr('disabled', false);
      $editbtn.css("display", "none");
      $savebtn.css("display", "block");
      $cancelbtn.css("display", "block");
    });

    $savebtn.click(function(e) {

      $fieldbox.attr('disabled', true);
      $editbtn.css("display", "block");
      $savebtn.css("display", "none");
      $cancelbtn.css("display", "none");
    });

    $cancelbtn.click(function(e) {

      $fieldbox.attr('disabled', true);
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

    $clockInput.click(function(e) {

      // Manual operations (after clockpicker is initialized).
      this.clockpicker('show') // Or hide, remove ...
        .clockpicker('toggleView', 'minutes');

    });

    $uploadWidgetOpener.click(function(e) {
      cloudinary.openUploadWidget({
          cloud_name: 'the-corp-india',
          upload_preset: 'rvg5voir'
        },
        function(error, result) {

          resultFromURL = result;

          $uploadWidgetOpener.css('background-image', "url(" + result[0].secure_url + ")");

          $('#image-url').val(result[0].secure_url);
          $('#image-thumbnail-url').val(result[0].thumbnail_url);


        });
    });



  };

  let finalise = function() {

    $('.clock-input').clockpicker({
      autoclose: true
    });
    $fieldbox.attr('disabled', true);
    $('.date').datetimepicker({
      format: 'DD-MM-YYYY'
    });
  };


  let logoutService = function() {
   securityJS.removeCookie("LOGIN_SALT");
    window.location.href = "./index.html";

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

    profileObj.finalise();

    securityJS.validateLogin();

  }

};

/* Document on ready */

$(function() {

  profileJS._init();
  profileJS._construct();
  profileJS._complete();
  profileJS._finalise();

});
