var express = require('express');
var router = express.Router();
var queries = require('../models/dbqueries');

router.post('/saveFamilyDetails', function(req, res, next) {
  	console.log('body: ' + JSON.stringify(req.body));
var bodyobj=req.body;
console.log("onj"+JSON.stringify(bodyobj));
    queries.addFamilyDetails(bodyobj, function(err, output) {
        if (err) {
            res.json(err);
            console.log(err+"err");
        } else {
            res.json(output.insertId);
            // res.json(count);
        }
    });
});

router.get('/fetchFamilyIdByProfileId/:profileId', function(req, res, next) {
  console.log("loginId"+req.params.profileId);
    queries.getFamilyDetailsByProfileId(req.params.profileId, function(err, rows) {
        if (err) {
            res.json(err);
        } else {
          var output={};
          output.familyId=rows[0].family_id;
            res.json(output);
        }
    });
});

router.get('/fetchFamilyDetailsByProfileId/:profileId', function(req, res, next) {
  console.log("profileId"+req.params.profileId);
    queries.getFamilyDetailsByProfileId(req.params.profileId, function(err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

module.exports = router;
