var loadProfileJS = (function() {

  let $searchProfile;
  let $viewProfile;

  let init = function() {

    $searchProfile = $('#searchProfile');
    $viewProfile = $('.viewProfile');
  };

  let construct = function() {
    $searchProfile.keyup(function() {
      var profileId = $searchProfile.val();
      if (profileId.length > 3) {
        _searchProfile();
      } else {
        let URL = "profile/basic-details/"
        loadProfileJS.showProfileList(URL);
      }



    });


  }

  let showProfileView = function(profileId) {

    if (securityJS.getCookie('LOGIN_SALT')) {


      window.location.href = "./searchview.html?q=" + profileId;
    } else {
      alert('Please Login to view this profile');
    }
  }

  let constructSnippet = function(obj) {

    let htmlSnippet = '<div class="profile"><div class="profileDetails rounded"><div class="img-responsive profilePicture img-rounded blurstyle" style="background-image:url(\'' + obj.profile_picture + '\' )!important;"></div>';
    htmlSnippet = htmlSnippet + '<div class="profileInfo"><div class="Name">' + obj.name + ' ( VVM ' + obj.profile_basic_id + ' )<i class="fa fa-check-circle tickMark"></i><span class="Name verifiedText ml-2">Verified</span></div>';
    htmlSnippet = htmlSnippet + '<div class="OtherInfo"><div class=""><span>' + _calculateAge(obj.dob) + '</span> yrs / <span>' + obj.height + '</span> cm</div><div class=""><span>'
    + obj.education_id + + '</span> / <span>' + + obj.profession_id + '</span></div><div class=""><span>' + obj.city_id  + '</div><div class=""><span>' +obj.religion_id + '</span> - <span>' + obj.caste_id + '</span></div></div><div class="viewButton whitecolor viewProfile" style="cursor:pointer;" onclick="loadProfileJS.showProfileView(' + obj.profile_basic_id + ')">  VIEW PROFILE</div><i class="fa fa-lock lock"></i></div></div><hr /></div>';
    return htmlSnippet;
  };

  let _calculateAge = function(birthday) { // birthday is a date

    var from = birthday.split("-")
    var birthdate = new Date(from[2], from[1] - 1, from[0])
    // var birthdate = new Date(birthday);
    var cur = new Date();
    var diff = cur - birthdate; // This is the difference in milliseconds
    var age = Math.floor(diff / 31557600000); // Divide by 1000*60*60*24*365.25

    return age;
  }

  let _searchProfile = function() {
    var profileId = $searchProfile.val();

    var format = profileId.substr(0, 3) || '';
    if (format != 'VVM' && format != 'vvm') {

      alert('Not in Req. format. Please contact administrator');
    } else {

      let lastFive = profileId.substr(3);
      lastFive = lastFive.trim();
      if (isNaN(lastFive)) {
        alert('Not a valid profile. Please contact administrator');
      } else {

        let URL = "profile/basic-details/" + lastFive;
        loadProfileJS.showProfileList(URL);
      }

    }
  }

  let showProfileList = function(URL) {

    const AJAX_INPUT_OBJ = {
      "METHOD": "GET",
      "data": {},
      "URL": URL_Domain + URL
    };

    $.ajax({
      type: AJAX_INPUT_OBJ.METHOD,
      data: JSON.stringify(AJAX_INPUT_OBJ.data),
      contentType: "application/json",
      url: AJAX_INPUT_OBJ.URL,
      success: function(data) {
        console.log("success");

        console.log(data);

        $('#profileListContainer').html('');

        let innerHTML = '';

        for (var iter in data) {
          innerHTML = innerHTML + constructSnippet(data[iter]);
        }

        $('#profileListContainer').html(innerHTML);
      }

    });
  }

  return {
    init: init,
    construct: construct,
    constructSnippet: constructSnippet,
    showProfileList: showProfileList,
    showProfileView: showProfileView
  }

})();
