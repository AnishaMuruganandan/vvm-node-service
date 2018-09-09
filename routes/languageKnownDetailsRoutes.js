var express = require('express');
var router = express.Router();
var queries = require('../models/dbqueries');

router.post('/saveLanguageKnownDetails', function(req, res, next) {
  console.log('body: ' + JSON.stringify(req.body));
  var bodyobj = req.body;
  console.log("onj" + JSON.stringify(bodyobj));
  queries.addLanguageKnownDetails(bodyobj, function(err, output) {
    if (err) {
      res.json(err);
      console.log(err + "err");
    } else {
      res.json(output.insertId);
      // res.json(count);
    }
  });
});

router.get('/fetchLanguageKnownDetailsByProfileId/:profileId', function(req, res, next) {
  console.log("profileId" + req.params.profileId);
  queries.getLanguageKnownDetailsByProfileId(req.params.profileId, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

module.exports = router;
