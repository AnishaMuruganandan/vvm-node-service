var express = require('express');
var router = express.Router();
var masterTableDelegateObj = require('../delegate-layer/master-table-delegate');

router.get('/fetch-zodiac', function(req, res, next) {
  console.log("fetchZodiacMasterTable");
  var result = await masterTableDelegateObj.getZodiacMasterTable();
  console.log(result + "result route");
  res.json(result);
});

router.get('/fetch-star', function(req, res, next) {
  console.log("fetchStarMasterTable");
  var result = await masterTableDelegateObj.getStarMasterTable();
  console.log(result + "result route");
  res.json(result);
});

router.get('/fetch-salary-range', function(req, res, next) {
  console.log("fetchSalaryRangeMasterTable");
  var result = await masterTableDelegateObj.getSalaryMasterTable();
  console.log(result + "result route");
  res.json(result);
});

router.get('/fetch-religions', function(req, res, next) {
  console.log("fetchReligionsMasterTable");
  var result = await masterTableDelegateObj.getReligionsMasterTable();
  console.log(result + "result route");
  res.json(result);
});

router.get('/fetch-relative-type', function(req, res, next) {
  console.log("fetchRelativeTypeMasterTable");
  var result = await masterTableDelegateObj.getRelativeTypeMasterTable();
  console.log(result + "result route");
  res.json(result);
});


router.get('/fetch-profession-details', function(req, res, next) {
  console.log("fetchProfessionDetailsMasterTable");
  var result = await masterTableDelegateObj.getProfessionDetailsMasterTable();
  console.log(result + "result route");
  res.json(result);
});


router.get('/fetch-mother-tongue', function(req, res, next) {
  console.log("fetchMotherTongueMasterTable");
  var result = await masterTableDelegateObj.getMotherTongueMasterTable();
  console.log(result + "result route");
  res.json(result);
});


router.get('/fetch-languages', function(req, res, next) {
  console.log("fetchLanguagesMasterTable");
  var result = await masterTableDelegateObj.getLanguagesMasterTable();
  console.log(result + "result route");
  res.json(result);
});


router.get('/fetch-lagna', function(req, res, next) {
  console.log("fetchLagnaMasterTable");
  var result = await masterTableDelegateObj.getLagnaMasterTable();
  console.log(result + "result route");
  res.json(result);
});


router.get('/fetch-gothram', function(req, res, next) {
  console.log("fetchGothramMasterTable");
  var result = await masterTableDelegateObj.getGothramMasterTable();
  console.log(result + "result route");
  res.json(result);
});


router.get('/fetch-educational-qualification', function(req, res, next) {
  console.log("fetchEducationalQualificationMasterTable");
  var result = await masterTableDelegateObj.getEducationalQualificationMasterTable();
  console.log(result + "result route");
  res.json(result);
});


router.get('/fetch-city', function(req, res, next) {
  console.log("fetchCityMasterTable");
  var result = await masterTableDelegateObj.getCityMasterTable();
  console.log(result + "result route");
  res.json(result);
});


router.get('/fetch-caste', function(req, res, next) {
  console.log("fetchCasteMasterTable");
  var result = await masterTableDelegateObj.getCasteMasterTable();
  console.log(result + "result route");
  res.json(result);
});


module.exports = router;
