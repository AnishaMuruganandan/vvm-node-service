var express = require('express');
var router = express.Router();
var async = require("async");
var loginDelegateObj = require('../delegate-layer/login-delegate');

//login verification for phoneNo and password


router.get('/login-check', async function(req, res, next) {
  console.log("logincheck :: " + req.query.phoneNo + " " + req.query.password);
  var result = await (loginDelegateObj.verifyLoginDetails(req.query.phoneNo, req.query.password));
  console.log(result + "result route");
  res.json(result);
});

//update last login time by login id

router.put('/update-login-time/:loginid', async function(req, res, next) {
  console.log('body: ' + JSON.stringify(req.body));
  var result = await (loginDelegateObj.updateLoginTime(req.params.loginid, req.body));
  console.log(result + "result route");
  res.json(result);
});

module.exports = router;
