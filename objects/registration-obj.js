var registrationObj = {

  verifyEmailIdObj: function(emailId) {
    this.emailId = emailId || '0';
  },

  verifyPhoneNoObj : function(phoneNo) {
    this.phoneNo = phoneNo || '0';
  },

  saveRegistrationDetailsObj : function(emailId, phoneNo, otp, username, password) {
    this.emailId = emailId || '0';
    this.phoneNo = phoneNo || '0';
    this.otp = otp || '0';
    this.username = username || '0';
    this.password = password || '0';
  },

  updatePasswordObj : function(emailId, password) {
    this.emailId = emailId || '0';
    this.password = password || '0';
  }

}
module.exports = registrationObj;
