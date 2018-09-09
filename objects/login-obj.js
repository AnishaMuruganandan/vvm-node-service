var loginObject = {

  verifyLoginDetailsObj: function(phoneNo, password) {

    this.phoneNo = phoneNo || '0';
    this.password = password || '0';

  },

  updateLoginTimeObj: function(loginId, loginTime) {

    this.loginId = loginId || '0';
    this.loginTime = loginTime || '0';

  },

}
module.exports = loginObject;
