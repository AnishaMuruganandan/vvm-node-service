var express = require('express');
var router = express.Router();

var queries = require('../models/dbqueries');

router.put('/loginTimeUpdate/:loginid', function(req, res, next) {
  var bodyobj = req.body;
  console.log("onj" + JSON.stringify(bodyobj) + "loginid" + req.params.loginid);
  queries.updateLoginTime(req.params.loginid, bodyobj, function(err, output) {
    if (err) {
      res.json(err);
      console.log(err + "err");
    } else {

      res.json(output);
    }
  });
});
router.get('/fetchLoginDetailsByEmail/:emailId', function(req, res, next) {
  console.log("emailId" + req.params.emailId);
  queries.getLoginDetailsByEmailId(req.params.emailId, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      var output = {};
      output.password = rows[0].password;
      output.loginid = rows[0].login_id;
      res.json(output);
    }
  });
});

router.get('/fetchLoginDetailsById/:loginId', function(req, res, next) {
  console.log("loginId" + req.params.loginId);
  queries.getLoginDetailsByloginId(req.params.loginId, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      var output = {};
      output.profileid = rows[0].profile_id;
      output.loginid = rows[0].email_id;
      output.phoneno = rows[0].phone_no;
      output.username = rows[0].username;
      res.json(output);
    }
  });
});
router.get('/fetchLoginTimeById/:loginId', function(req, res, next) {
  console.log("loginId" + req.params.loginId);
  queries.getLoginDetailsByloginId(req.params.loginId, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      var output = {};
      output.logintime = rows[0].recent_login_time;
      res.json(output);
    }
  });
});
router.get('/fetchProfileIdByLoginId/:loginId', function(req, res, next) {
  console.log("loginId" + req.params.loginId);
  queries.getLoginDetailsByloginId(req.params.loginId, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      var output = {};
      output.profileid = rows[0].profile_id;
      res.json(output);
    }
  });
});
module.exports = router;
