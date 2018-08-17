var express = require('express');
var router = express.Router();
var queries = require('../models/dbqueries');

router.post('/profileCreation', function(req, res, next) {
  console.log('body: ' + JSON.stringify(req.body));
  var bodyobj = req.body;
  // obj.otp=//method call
  console.log("onj" + JSON.stringify(bodyobj));
  queries.addProfileDetails(bodyobj, function(err, output) {
    if (err) {
      res.json(err);
      console.log(err + "err");
    } else {
      res.json(output.insertId);
      // res.json(count);
    }
  });
});

router.get('/fetchProfileDetailsByProfileId/:profileId', function(req, res, next) {
  console.log("profileId" + req.params.profileId);
  queries.getProfileDetailsByProfileId(req.params.profileId, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

// router.get('/:id?', function(req, res, next) {
//   if (req.params.id) {
//       Task.getProfileById(req.params.id, function(err, rows) {
//           if (err) {
//               res.json(err);
//           } else {
//               res.json(rows);
//           }
//       });
//   } else {
//       Task.getAllProfile(function(err, rows) {
//           if (err) {
//               res.json(err);
//           } else {
//               res.json(rows);
//           }
//       });
//   }
// });

module.exports = router;
