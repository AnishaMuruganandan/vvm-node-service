var express = require('express');
var router = express.Router();
// var queries = require('../models/dbqueries');
var profileDelegateObj = require('../delegate-layer/profile-delegate');

router.post('/profile-details', async function(req, res, next) {
  console.log('body: ' + JSON.stringify(req.body));
  var result = await profileDelegateObj.saveprofileDetails(req.body);
  console.log(result + "result route");
  res.json(result);
  // queries.addProfileDetails(bodyobj, function(err, output) {
  //   if (err) {
  //     res.json(err);
  //     console.log(err + "err");
  //   } else {
  //     res.json(output.insertId);
  //
  //   }
  // });
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
