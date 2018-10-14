var otpGenerator = require('otp-generator');
var request = require("request");

var validOptions = {
  username: 'hola@thecorp.in',
  hash: 'b8df2c8226b9e15f2b6ac404bf4c1e13be283a269265b4f6c614fbabbf8142c4',
  apikey: 'KwnomGVgP2s-ZEItpEPgykuxybij9puVCXC730R6sc'
};
// var validOptions = {  };
var tl = require('TextLocal')(validOptions);

var OTPUtil = (function() {
  var otp;
  let OTPGeneration = function() {
     otp = otpGenerator.generate(6, {
      specialChars: false
    });
    return otp;
  };

  let SendingOTP = function(OTP, phoneNo) {
    var result;
    tl.sendSMS(phoneNo,  OTP + " is the OTP for Crop Per Drop App.", 'TeamBF', function(err, data) {
      console.log("err" + err + "data" + data);
       result = data;
    });
    return result;
    const TEXT_LOCAL_HOST = 'https://api.textlocal.in/send/';
    var MSG_TEMPLATE = OTP + " is the OTP for Crop Per Drop App.";
    var TEXT_LOCAL_SENDER = 'TeamBF';

    let options = {
      'apikey': validOptions.apikey,
      'message': MSG_TEMPLATE,
      'sender': TEXT_LOCAL_SENDER,
      'numbers': phoneNo
    }
      request.post({
        url: TEXT_LOCAL_HOST,
        form: options
      }, (error, response, body) => {
        if(error)
console.error("err",error);
console.log("response",response);

console.log("body",body);

      })
return  OTP;

  };

  return {
    OTPGeneration: OTPGeneration,
    SendingOTP: SendingOTP
  }

})();

// var val = Math.floor(1000 + Math.random() * 9000);
// console.log(val);

module.exports = OTPUtil;
