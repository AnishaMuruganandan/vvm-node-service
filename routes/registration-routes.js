var express = require('express');
var router = express.Router();

var queries = require('../models/dbqueries');
var registrationDelegateObj = require('../delegate-layer/registration-delegate');

//email duplicate verification

router.get('/email-check', async function(req, res, next) {
  console.log("emailcheck"+req.query.emailId);
  var result = await registrationDelegateObj.verifyEmailId(req.query.emailId);
  console.log(result + "result route");
  res.json(result);
});

//phone duplicate verification

router.get('/phone-number-check', async function(req, res, next) {
  console.log("phonenumber check"+req.query.phoneNo);
  var result = await registrationDelegateObj.verifyPhoneNo(req.query.phoneNo);
  console.log(result + "result route");
  res.json(result);
});

//save emailId , phoneno, otp, password and username

router.post('/registration-details', async function(req, res, next) {
  console.log('body: ' + JSON.stringify(req.body));
  var result = await registrationDelegateObj.saveRegistrationDetails(req.body);
  console.log(result + "result route");
  res.json(result);
});

//update password by email id

router.put('/update-password/:emailId', async function(req, res, next) {
  console.log('body: ' + JSON.stringify(req.body));
  var result = await registrationDelegateObj.updatePassword(req.params.emailId, req.body);
  console.log(result + "result route");
  res.json(result);
});

router.put('/updateCredential/:loginId', function(req, res, next) {
  var bodyobj = req.body;
  console.log("onj" + JSON.stringify(bodyobj) + "loginId" + req.params.loginid);
  queries.updateCrendential(req.params.loginId, bodyobj, function(err, output) {
    if (err) {
      res.json(err);
      console.log(err + "err");
    } else {
      res.json(output);
    }
  });
});

router.put('/updateProfileId/:loginId', function(req, res, next) {
  var bodyobj = req.body;
  console.log("onj" + JSON.stringify(bodyobj) + "loginId" + req.params.loginid);
  queries.updateProfileId(req.params.loginid, bodyobj, function(err, output) {
    if (err) {
      res.json(err);
      console.log(err + "err");
    } else {
      res.json(output);
    }
  });
});
module.exports = router;
