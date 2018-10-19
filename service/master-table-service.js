var express = require('express');
var masterTableQueries = require('../models/master-table-db-queries');
var masterTableQueriesConst = require('../query-constants/master-table-query-constant');
var masterTableService =  (function() {

  getZodiacMasterTable: async function() {
    console.log("getZodiacMasterTable");
    var msg = {};
    try {
      var output = await masterTableQueries.getZodiacMasterTableDetails(masterTableQueriesConst.getZodiacMasterTableDetailsQuery);
      console.log(JSON.stringify(output) + "output");
      msg = output;
    } catch (err) {
      msg = err;
      console.log('Opps, an error occurred', err);
    }
    return msg;
  };

  getStarMasterTable: async function() {
    console.log("getStarMasterTable");
    var msg = {};
    try {
      var output = await masterTableQueries.getStarMasterTableDetails(masterTableQueriesConst.getStarMasterTableDetailsQuery);
      console.log(JSON.stringify(output) + "output");
      msg = output;
    } catch (err) {
      msg = err;
      console.log('Opps, an error occurred', err);
    }
    return msg;
  };

  getSalaryMasterTable: async function() {
    console.log("getSalaryMasterTable");
    var msg = {};
    try {
      var output = await masterTableQueries.getSalaryMasterTableDetails(masterTableQueriesConst.getSalaryMasterTableDetailsQuery);
      console.log(JSON.stringify(output) + "output");
      msg = output;
    } catch (err) {
      msg = err;
      console.log('Opps, an error occurred', err);
    }
    return msg;
  };

  getReligionsMasterTable: async function() {
    console.log("getReligionsMasterTable");
    var msg = {};
    try {
      var output = await masterTableQueries.getReligionsMasterTableDetails(masterTableQueriesConst.getReligionsMasterTableDetailsQuery);
      console.log(JSON.stringify(output) + "output");
      msg = output;
    } catch (err) {
      msg = err;
      console.log('Opps, an error occurred', err);
    }
    return msg;
  };

  getRelativeTypeMasterTable: async function() {
    console.log("getRelativeTypeMasterTable");
    var msg = {};
    try {
      var output = await masterTableQueries.getRelativeTypeMasterTableDetails(masterTableQueriesConst.getRelativeTypeMasterTableDetailsQuery);
      console.log(JSON.stringify(output) + "output");
      msg = output;
    } catch (err) {
      msg = err;
      console.log('Opps, an error occurred', err);
    }
    return msg;
  };

  getProfessionDetailsMasterTable: async function() {
    console.log("getProfessionDetailsMasterTable");
    var msg = {};
    try {
      var output = await masterTableQueries.getProfessionDetailsMasterTableDetails(masterTableQueriesConst.getProfessionDetailsMasterTableDetailsQuery);
      console.log(JSON.stringify(output) + "output");
      msg = output;
    } catch (err) {
      msg = err;
      console.log('Opps, an error occurred', err);
    }
    return msg;
  };

  getMotherTongueMasterTable: async function() {
    console.log("getMotherTongueMasterTable");
    var msg = {};
    try {
      var output = await masterTableQueries.getMotherTongueMasterTableDetails(masterTableQueriesConst.getMotherTongueMasterTableDetailsQuery);
      console.log(JSON.stringify(output) + "output");
      msg = output;
    } catch (err) {
      msg = err;
      console.log('Opps, an error occurred', err);
    }
    return msg;
  };

  getLanguagesMasterTable: async function() {
    console.log("getLanguagesMasterTable");
    var msg = {};
    try {
      var output = await masterTableQueries.getLanguagesMasterTableDetails(masterTableQueriesConst.getLanguagesMasterTableDetailsQuery);
      console.log(JSON.stringify(output) + "output");
      msg = output;
    } catch (err) {
      msg = err;
      console.log('Opps, an error occurred', err);
    }
    return msg;
  };

  getLagnaMasterTable: async function() {
    console.log("getLagnaMasterTable");
    var msg = {};
    try {
      var output = await masterTableQueries.getLagnaMasterTableDetails(masterTableQueriesConst.getLagnaMasterTableDetailsQuery);
      console.log(JSON.stringify(output) + "output");
      msg = output;
    } catch (err) {
      msg = err;
      console.log('Opps, an error occurred', err);
    }
    return msg;
  };

  getGothramMasterTable: async function() {
    console.log("getGothramMasterTable");
    var msg = {};
    try {
      var output = await masterTableQueries.getGothramMasterTableDetails(masterTableQueriesConst.getGothramMasterTableDetailsQuery);
      console.log(JSON.stringify(output) + "output");
      msg = output;
    } catch (err) {
      msg = err;
      console.log('Opps, an error occurred', err);
    }
    return msg;
  };

  getEducationalQualificationMasterTable: async function() {
    console.log("getEducationalQualificationMasterTable");
    var msg = {};
    try {
      var output = await masterTableQueries.getEducationalQualificationMasterTableDetails(masterTableQueriesConst.getEducationalQualificationMasterTableDetailsQuery);
      console.log(JSON.stringify(output) + "output");
      msg = output;
    } catch (err) {
      msg = err;
      console.log('Opps, an error occurred', err);
    }
    return msg;
  };

  getCityMasterTable: async function() {
    console.log("getCityMasterTable");
    var msg = {};
    try {
      var output = await masterTableQueries.getCityMasterTableDetails(masterTableQueriesConst.getCityMasterTableDetailsQuery);
      console.log(JSON.stringify(output) + "output");
      msg = output;
    } catch (err) {
      msg = err;
      console.log('Opps, an error occurred', err);
    }
    return msg;
  };

  getCasteMasterTable: async function() {
    console.log("getCasteMasterTable");
    var msg = {};
    try {
      var output = await masterTableQueries.getCasteMasterTableDetails(masterTableQueriesConst.getCasteMasterTableDetailsQuery);
      console.log(JSON.stringify(output) + "output");
      msg = output;
    } catch (err) {
      msg = err;
      console.log('Opps, an error occurred', err);
    }
    return msg;
  };

    return {
      getZodiacMasterTable: getZodiacMasterTable,
      getStarMasterTable: getStarMasterTable,
      getSalaryMasterTable: getSalaryMasterTable,
      getReligionsMasterTable: getReligionsMasterTable,
      getRelativeTypeMasterTable: getRelativeTypeMasterTable,
      getProfessionDetailsMasterTable: getProfessionDetailsMasterTable,
      getMotherTongueMasterTable: getMotherTongueMasterTable,
      getLanguagesMasterTable: getLanguagesMasterTable,
      getLagnaMasterTable: getLagnaMasterTable,
      getGothramMasterTable: getGothramMasterTable,
      getEducationalQualificationMasterTable: getEducationalQualificationMasterTable,
      getCityMasterTable: getCityMasterTable,
      getCasteMasterTable: getCasteMasterTable
    }

  })();

module.exports = masterTableService;
