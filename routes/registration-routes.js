var express = require('express');
var router = express.Router();
var registrationDelegateObj = require('../delegate-layer/registration-delegate');
var profileDelegateObj = require('../delegate-layer/profile-delegate');

//email duplicate verification

router.get('/email-check', async function(req, res, next) {
  console.log("emailcheck" + req.query.emailId);
  var result = await registrationDelegateObj.verifyEmailId(req.query.emailId);
  console.log(result + "result route");
  res.json(result);
});

//phone duplicate verification

router.get('/phone-number-check', async function(req, res, next) {
  console.log("phonenumber check" + req.query.phoneNo);
  var result = await registrationDelegateObj.verifyPhoneNo(req.query.phoneNo);
  console.log(result + "result route");
  res.json(result);
});

//save emailId , phoneno, otp, password and username

router.post('/registration-details', async function(req, res, next) {
  var result;
  console.log('body: ' + JSON.stringify(req.body));
  var profileInsertion = await profileDelegateObj.saveBasicProfileDetails(req.body);
  var response= JSON.stringify(profileInsertion);
  console.log(profileInsertion.insertId + "profileInsertion");
  if(profileInsertion.insertId > 0){
var data = req.body;
data.profileBasicId = profileInsertion.insertId;
  result =await registrationDelegateObj.saveRegistrationDetails(data);
  }
  res.json(result);
});

//update password by email id

router.put('/update-password/:emailId', async function(req, res, next) {
  console.log('body: ' + JSON.stringify(req.body));
  var result = await registrationDelegateObj.updatePassword(req.params.emailId, req.body);
  console.log(result + "result route");
  res.json(result);
});

//update profileId by loginId

router.put('/update-profileId/:loginId', async function(req, res, next) {
  console.log('body: ' + JSON.stringify(req.body));
  var result = await registrationDelegateObj.updateProfileId(req.params.loginId, req.body);
  console.log(result + "result route");
  res.json(result);
});

//otp generation and sending msg

router.post('/send-otp', function(req, res, next) {
  console.log('body: ' + JSON.stringify(req.body));
  var result = registrationDelegateObj.sendOTP(req.body);
  console.log(result + "result route");
  res.json(result);
});

module.exports = router;
