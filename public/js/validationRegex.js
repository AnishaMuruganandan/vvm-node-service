var regexCheckJS = {

  userNameValidation: function(name) {
    // console.log(name);
    if (name == 'NULL' || name.length == 0 || (!(/^[a-z A-Z]*$/g).test(name))) {
      regexCheckJS.snackBar("Enter Valid Display Name");
      return false;
    } else {
      return true;
    }
  },

  userEmailIdValidation: function(emailId) {
    // console.log(emailId);
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (emailId == 'NULL' || emailId.length == 0 || (!(reg).test(emailId))) {
      regexCheckJS.snackBar("Enter Valid Email Id");
      return false;
    } else {
      return true;
    }

  },

  userPhoneNoValidation: function(phoneNo) {
    console.log(phoneNo);
    if (phoneNo == 'NULL' || !(phoneNo.length == 10) || (!(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/g).test(phoneNo))) {
      regexCheckJS.snackBar("Enter Valid Phone Number");
      return false;
    } else {
      return true;
    }
  },

  userProfessionValidation: function(profession) {
    // console.log(profession);
    if (profession == 'NULL' || profession == "-- select one --") {
      regexCheckJS.snackBar("Enter Valid Profession");
      return false;
    } else {
      return true;
    }
  },

  userEducationValidation: function(education) {
    // console.log(education);
    if (education == 'NULL' || education == "-- select one --") {
      regexCheckJS.snackBar("Enter Valid Education");
      return false;
    } else {
      return true;
    }
  },

  useReligionValidation: function(religion) {
    // console.log(religion);
    if (religion == 'NULL' || religion == "-- select one --") {
      regexCheckJS.snackBar("Enter Valid Religion");
      return false;
    } else {
      return true;
    }
  },

  userCasteValidation: function(caste) {
    // console.log(caste);
    if (caste == 'NULL' || caste == "-- select one --") {
      regexCheckJS.snackBar("Enter Valid Caste");
      return false;
    } else {
      return true;
    }
  },

  snackBar: function(message) {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");

    // Add the "show" class to DIV
    x.className = "show";

    x.innerHTML = message;
    // After 3 seconds, remove the show class from DIV
    setTimeout(function() {
      x.className = x.className.replace("show", "");
    }, 3000);
  }

};
