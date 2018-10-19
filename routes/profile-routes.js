var express = require('express');
var router = express.Router();
// var queries = require('../models/dbqueries');
var profileDelegateObj = require('../delegate-layer/profile-delegate');

router.post('/profile-details', async function(req, res, next) {
  console.log('body: ' + JSON.stringify(req.body));
  var result = await profileDelegateObj.saveprofileDetails(req.body);
  console.log(result + "result route");
  res.json(result);
});

router.get('/fetch-profile-details/:profileId', function(req, res, next) {
  console.log('body: ' + JSON.stringify(req.body));
  var result = await profileDelegateObj.getProfileDetailsByProfileId(req.body);
  console.log(result + "result route");
  res.json(result);
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
