var registrationObj = {

  verifyEmailIdObj: function(emailId) {
    this.emailId = emailId || '0';
  },

  verifyPhoneNoObj: function(phoneNo) {
    this.phoneNo = phoneNo || '0';
  },

  saveRegistrationDetailsObj: function(profileBasicId, emailId, phoneNo, otp, username, password) {
    this.profileBasicId = profileBasicId || '0';
    this.emailId = emailId || '0';
    this.phoneNo = phoneNo || '0';
    this.otp = otp || '0';
    this.username = username || '0';
    this.password = password || '0';
  },

  updatePasswordObj: function(emailId, password) {
    this.emailId = emailId || '0';
    this.password = password || '0';
  },

  updateProfileIdObj: function(loginId, profileId) {
    this.loginId = loginId || '0';
    this.profileId = profileId || '0';
  }

}
module.exports = registrationObj;
