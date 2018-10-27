var loadProfileJS = (function() {


  let init = function() {

  };

  let constructSnippet = function(obj) {

    let htmlSnippet = '<div class="profile"><div class="profileDetails rounded"><div class="img-responsive profilePicture img-rounded blurstyle" style="background-image:url(\'' + obj.profile_picture + '\' )!important;"></div>';
    htmlSnippet = htmlSnippet + '<div class="profileInfo"><div class="Name">' + obj.name + ' ( VVM ' + obj.profile_basic_id + ' )<i class="fa fa-check-circle tickMark"></i><span class="Name verifiedText ml-2">Verified</span></div>';
    htmlSnippet = htmlSnippet + '<div class="OtherInfo"><div class=""><span>' + _calculateAge(obj.dob) + '</span> yrs / <span>' + obj.height + '</span> cm</div><div class="">' + obj.education_id + '</div><div class="">' + obj.profession_id + '</div><div class=""><span>' + obj.religion_id + '</span> - <span>' + obj.caste_id + '</span></div></div><div class="viewButton whitecolor" class="viewProfile">  VIEW PROFILE</div><i class="fa fa-lock lock"></i></div></div><hr /></div>';
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

  let showProfileList = function() {

    const AJAX_INPUT_OBJ = {
      "METHOD": "GET",
      "data": {},
      "URL": URL_Domain + "profile/top-ten"
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
    constructSnippet: constructSnippet,
    showProfileList: showProfileList
  }

})();
