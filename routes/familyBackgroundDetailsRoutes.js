var express = require('express');
var router = express.Router();
var queries = require('../models/dbqueries');

router.post('/saveFamilyBackgroundDetails', function(req, res, next) {
  console.log('body: ' + JSON.stringify(req.body));
  var bodyobj = req.body;
  console.log("onj" + JSON.stringify(bodyobj));
  queries.addFamilyBackgroundDetails(bodyobj, function(err, output) {
    if (err) {
      res.json(err);
      console.log(err + "err");
    } else {
      res.json(output.insertId);
      // res.json(count);
    }
  });
});

router.get('/fetchfamilyBackgroundDetailsByFamilyId/:familyId', function(req, res, next) {
  console.log("familyId" + req.params.familyId);
  queries.getfamilyBackgroundDetailsByFamilyId(req.params.familyId, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

module.exports = router;
