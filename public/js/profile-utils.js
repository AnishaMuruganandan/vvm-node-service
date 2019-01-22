var profileUtils = (function() {

  $upload_widget_opener = $('#upload_widget_opener');
  $fullName = $('#fullName');
  $livingPlace = $('#livingPlace');
  $profileViewId = $('#profileViewId');
  $age = $('#age');
  $contactNo = $('#contactNo');
  $profession = $('#profession');
  $education = $('#education');
  $religion = $('#religion');
  $caste = $('#caste');

  $name = $('#name');
  $dob = $('#dob');
  $email = $('#email');
  $gender = $('#gender');
  $height = $('#height');
  $complexion = $('#complexion');
  $salary = $('#salary');
  $aboutMe = $('#aboutMe');
  $expectations = $('#expectations');

  $cityLiving = $('#cityLiving');
  $nativePlace = $('#nativePlace');

  $physicallyDisabled = $('#physicallyDisabled');

  $address = $('#address');
  $languageKnown = $('#languageKnown');
  $imageURL = $('#image-url');

  $horoscope = $('#horoscope');
  $fatherName = $('#fName');
  $motherName = $('#mName');
  $siblingCount = $('#sibCount');
  $motherTongue = $('#motherTongue');

  $jathagamSoftCopy = $('#horoscope');
  $tob = $('#tob');
  $pob = $('#pob');
  $zodiac = $('#rasi');
  $star = $('#nakshatra');
  $lagna = $('#lagna');
  $paagam = $('#paagam');

  $alternatephone1 = $('#alternatephone1');
  $alternatephone2 = $('#alternatephone2');


  $jathagamDownload = $('#jathagamDownload');


  $sibDetails = $('#sibDetails');

  let populateDOM = function(data) {

    $upload_widget_opener.css('background-image', 'url("' + data.profileBasicData[0].profile_picture + '")')
    $fullName.html(data.profileBasicData[0].name);
    $livingPlace.html(data.profileBasicData[0].city_id);
    $profileViewId.html(data.profileBasicData[0].profile_basic_id);
    $age.html(_calculateAge(data.profileBasicData[0].dob));

    $profession.val(data.profileBasicData[0].profession_id);
    $education.val(data.profileBasicData[0].education_id);
    $religion.val(data.profileBasicData[0].religion_id);
    $caste.val(data.profileBasicData[0].caste_id);

    $alternatephone1.val(data.profileAdditionalData[0].alternatephone1);
    $alternatephone2.val(data.profileAdditionalData[0].alternatephone2);



    if (data.loginData && data.loginData.length > 0) {
      $contactNo.val(data.loginData[0].phone_no);
      $email.val(data.loginData[0].email_id);
    }



    $name.val(data.profileBasicData[0].name);
    $dob.val(data.profileBasicData[0].dob);

    $height.val(data.profileBasicData[0].height);

    $cityLiving.val(data.profileBasicData[0].city_id);


    if (data.profileAdditionalData && data.profileAdditionalData.length > 0) {

      $gender.val(data.profileAdditionalData[0].gender);
      $complexion.val(data.profileAdditionalData[0].complexion);
      $salary.val(data.profileAdditionalData[0].salary_id);
      $physicallyDisabled.val(data.profileAdditionalData[0].physical_disablity);
      $aboutMe.val(data.profileAdditionalData[0].about_me);
      $expectations.val(data.profileAdditionalData[0].expectations);


      var languageKnown = data.profileAdditionalData[0].language_known.split(',');
      for (let iter in languageKnown) {
        $('#languageKnown option[value = "' + languageKnown[iter] + '"]').attr('selected', true);
      }



    }
    if (data.horoscopeData && data.horoscopeData.length > 0) {

      $horoscope.val(data.horoscopeData[0].horoscope_soft_copy);
      if (data.horoscopeData[0].horoscope_soft_copy != '') {
        $jathagamDownload.html('Download Jathagam here');
        $jathagamDownload.attr('href', data.horoscopeData[0].horoscope_soft_copy);
        $jathagamDownload.attr('target', "_blank");

      } else {

        // $jathagamDownload.removeAttr('target');
        // $jathagamDownload.html('No Jathagam Available');
        $jathagamDownload.attr('href',"javascript:alert('No Jathagam Available')");
      }

      $tob.val(data.horoscopeData[0].time_of_birth);
      $pob.val(data.horoscopeData[0].place_of_birth);
      $zodiac.val(data.horoscopeData[0].zodiac_id);
      $star.val(data.horoscopeData[0].star_id);
      $lagna.val(data.horoscopeData[0].lagna_id);
      $paagam.val(data.horoscopeData[0].paagam);
    }


    if (data.familyData && data.familyData.length > 0) {
      let index = data.familyData.length - 1;

      $address.val(data.profileAdditionalData[0].address)
      $fatherName.val(data.familyData[index].father_name);
      $motherName.val(data.familyData[index].mother_name);
      $siblingCount.val(data.familyData[index].no_of_siblings);

      $motherTongue.val(data.familyData[index].mother_tongue_id);
      $nativePlace.val(data.familyData[index].native_place);
    }


    if (data.familyBackgroundData && data.familyBackgroundData.length > 0) {

      let innerHTML = '';
      for (var i = 0; i < data.familyBackgroundData.length; i++) {

        let htmlSnippet = '<div class="row mb-5"><div class="col-md-4"><div class="profileInput"><select name="siblingType" type="number" required class="js-example-basic-single select2me" disabled="disabled"><option value="" selected="selected" disabled="disabled">-- select one --</option><option value="Sister">Sister</option><option value="Brother">Brother</option></select><label for="siblingType" class="profileLabel select2ProfileInputBox">Sibling Type</label></div></div>';
        htmlSnippet = htmlSnippet + '<div class="col-md-4"><div class="profileInput"><select name="siblingAge" type="number" required class="js-example-basic-single select2me" disabled="disabled"><option value="" selected="selected" disabled="disabled">-- select one --</option><option value="Elder">Elder</option><option value="Younger">Younger</option></select><label for="siblingAge" class="profileLabel select2ProfileInputBox">Sibling Age</label></div></div>';
        htmlSnippet = htmlSnippet + '<div class="col-md-4"><div class="profileInput"><select name="siblingMaritalStatus" type="number" required class="js-example-basic-single select2me" disabled="disabled"><option value="" selected="selected" disabled="disabled">-- select one --</option><option value="Married">Married</option><option value="Unmarried">Unmarried</option></select><label for="siblingMaritalStatus" class="profileLabel select2ProfileInputBox">Sibling Marital Status</label></div></div></div>';
        innerHTML = innerHTML + htmlSnippet;

      }

      $sibDetails.html(innerHTML);


      relation = data.familyBackgroundData;
      let j = 0;

      $("select[name='siblingType']").each(function() {
        j = 0;
        $(this).val(relation[j].relative_type_id);
        j++;
      });
      $("select[name='siblingAge']").each(function() {
        j = 0;
        $(this).val(relation[j].age);
        j++;
      });
      $("select[name='siblingMaritalStatus']").each(function() {
        j = 0;
        $(this).val(relation[j].marital_status);
        j++;
      });




    }

  }


  let _calculateAge = function(birthday) { // birthday is a date

    var from = birthday.split("-")
    var birthdate = new Date(from[2], from[1] - 1, from[0])
    // var birthdate = new Date(birthday);
    var cur = new Date();
    var diff = cur - birthdate; // This is the difference in milliseconds
    var age = Math.floor(diff / 31557600000); // Divide by 1000*60*60*24*365.25

    return age;
  }


  return {
    populateDOM: populateDOM
  }

})();
