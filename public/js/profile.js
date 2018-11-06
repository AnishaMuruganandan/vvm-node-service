/* FILE_NAME : registration.js FOLDER : public/js/registration DESCRIPTION : AUTHOR : ANN NOTES : */
let profileFunc = (function() {
  let FILE_NAME = "profileJS";


  let init = function() {

    $logoutAct = $('#logoutAct');
    $editbtn = $('#editbtn');
    $savebtn = $('#savebtn');
    $cancelbtn = $('#cancelbtn');
    $clockInput = $('#clock-input');
    $fieldbox = $('.profileTabContent input ,.profileTabContent select, .diableChanges');
    $uploadWidgetOpener = $('#upload_widget_opener');
    $gender = $('#gender');
    $salary = $('#salary');
    $complexion = $('#complexion');
    $address = $('#address');
    $physicallyDisabled = $('#physicallyDisabled');
    $languageKnown = $('#languageKnown');
    $imageURL = $('#image-url');
    $horoscope = $('#horoscope');
    $cityLiving = $('#cityLiving');
    $profession = $('#profession');
    $education = $('#education');
    $fatherName = $('#fName');
    $motherName = $('#mName');
    $siblingCount = $('#sibCount');
    $motherTongue = $('#motherTongue');
    $nativePalce = $('#nativePlace');
    $tob = $('#tob');
    $pob = $('#pob');
    $zodiac = $('#rasi');
    $star = $('#nakshatra');
    $lagna = $('#lagna');
    $emailDisable = $('.emailDisable');
    $name = $('#name');
    $dob = $('#dob');
    $height = $('#height');
    $religion = $('#religion');
    $caste = $('#caste');

  };

  let construct = async function() {
    let data = await profileServiceDeclaration.getProfileFullInfo();

    profileUtils.populateDOM(data);

    $('.js-example-basic-single').select2();

  };

  let complete = function() {

    $editbtn.click(function(e) {
      $fieldbox.attr('disabled', false);
      $emailDisable.attr('disabled', true);
      $editbtn.css("display", "none");
      $savebtn.css("display", "block");
      $cancelbtn.css("display", "block");
    });

    $savebtn.click(function(e) {
      saveAllProfileDetailsService();
      $fieldbox.attr('disabled', true);
      $editbtn.css("display", "block");
      $savebtn.css("display", "none");
      $cancelbtn.css("display", "none");
    });

    $cancelbtn.click(function(e) {
      location.reload();
      $fieldbox.attr('disabled', true);
      $editbtn.css("display", "block");
      $savebtn.css("display", "none");
      $cancelbtn.css("display", "none");
    });

    $horoscope.click(function(e) {
      cloudinary.openUploadWidget({
          cloud_name: 'the-corp-india',
          upload_preset: 'xwnyzhmn',
        },
        function(error, result) {
          resultFromURL = result;
          $horoscope.val(result[0].secure_url);
        });

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
          upload_preset: 'rvg5voir',
          cropping: true
        },
        function(error, result) {

          resultFromURL = result;

          $uploadWidgetOpener.css('background-image', "url(" + result[0].secure_url + ")");

          $('#image-url').val(result[0].secure_url);
          $('#image-thumbnail-url').val(result[0].thumbnail_url);


          saveProfilePictureService();


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
    securityJS.removeCookie("PROFILE_BASIC_ID");
    window.location.href = "/";

  };

  let saveAllProfileDetailsService = async function() {

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


for (let i=0;i<siblingTypeArr.length;i++){
let sibling  =  {

  type :siblingTypeArr[i],
  age :siblingAgeArr[i],
  maritalStatus :siblingMaritalStatusArr[i]
};
siblingsDetails.push(sibling);
}


    var data = {
      "profileAdditionalData": {
        "gender": $gender.select2().val(),
        "salary": $salary.select2().val() || "",
        "complexion": $complexion.select2().val() || "",
        "address": $address.val() || "",
        "physicallyDisabled": $physicallyDisabled.select2().val() || "",
        "languageKnown": $languageKnown.select2().val().toString() || "",
      },
      "profileBasicData": {
        "profileBasicId": securityJS.getCookie('PROFILE_BASIC_ID') || 0,
        "city": $cityLiving.select2().val() || "",
        "education": $education.select2().val() || "",
        "profession": $profession.select2().val() || "",
        "name": $name.val() || "",
        "dob": $dob.val() || "",
        "height": $height.val() || "",
        "religion": $religion.select2().val() || "",
        "caste": $caste.select2().val() || ""
      },
      "familyData": {
        "fatherName": $fatherName.val() || "",
        "motherName": $motherName.val() || "",
        "siblingCount": $siblingCount.select2().val() || "",
        "motherTongue": $motherTongue.select2().val() || "",
        "nativePalce": $nativePalce.val()
      },
      "horoscopeData": {
        "jathagamSoftCopy": $horoscope.val() || "",
        "tob": $tob.val() || "",
        "pob": $pob.val() || "",
        "zodiac": $zodiac.select2().val() || "",
        "star": $star.select2().val() || "",
        "lagna": $lagna.select2().val() || ""
      },
      "familyBackgroundData":{
        "siblingsDetails":siblingsDetails
      }
    };
    var result = await profileServiceDeclaration.saveAllProfileDetailsService(data);
    securityJS.addCookie("PROFILE_ID", result.insertId);
    location.reload();
    console.log(result + "fearesult");
  };


  let saveProfilePictureService = async function() {

    var data = {
      "profileBasicId": securityJS.getCookie('PROFILE_BASIC_ID'),
      "picURL": $imageURL.val()


    };
    var result = await profileServiceDeclaration.saveProfilePictureService(data);
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
  _construct: function() {
    profileObj.construct();
  },

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
    $('#loader').fadeOut();

    if (securityJS.getCookie('PROFILE_ID') == '0') {

      $editbtn.trigger('click');
      setTimeout(function() {
        alert('Please update your Profile Details');
      }, 1000);
    }

  }

};

/* Document on ready */

$(function() {

  profileJS._init();
  profileJS._construct();
  profileJS._complete();
  profileJS._finalise();

});
