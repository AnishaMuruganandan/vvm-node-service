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

// router.get('/fetch-profile-details/:profileId', function(req, res, next) {
//   console.log('body: ' + JSON.stringify(req.body));
//   var result = await profileDelegateObj.getProfileDetailsByProfileId(req.body);
//   console.log(result + "result route");
//   res.json(result);
// });

router.get('/:id?', async function(req, res, next) {
  if (req.params.id) {
    console.log('body: ' + JSON.stringify(req.params.id));
    var profileBasicDetails = await profileDelegateObj.getProfileBasicDetailsByProfileId(req.params.id);
    console.log(profileBasicDetails + "profileBasicDetails route");
    res.json(profileBasicDetails);
  } else {
    console.log("get profile details");
    var profileBasicDetails = await profileDelegateObj.getProfileBasicDetails();
    console.log(profileBasicDetails + "basicDetails route");
    res.json(profileBasicDetails);
  }
});


router.get('details/:id?', async function(req, res, next) {
  if (req.params.id) {
    console.log('body: ' + JSON.stringify(req.params.id));
    var result = await profileDelegateObj.getProfileDetailsByProfileId(req.params.id);
    console.log(result + "result route");
    res.json(result);
  } else {
    console.log("get profile details");
    var result = await profileDelegateObj.getProfileDetails();
    console.log(result + "result route");
    res.json(result);
  }
});

module.exports = router;
