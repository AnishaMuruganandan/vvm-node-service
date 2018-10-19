var express = require('express');
var masterTableServiceObj = require('../service/master-table-service');
var masterTableObject = require('../objects/master-table-obj');

var masterTableDelegate = (function() {

  getZodiacMasterTable: async function() {
    console.log("dlegate");
    try {
      console.log("del try");
      var output = await masterTableServiceObj.getZodiacMasterTable();
      console.log(output + "out delegate");
      return output;

    } catch (error) {
      console.log(error);
      return error;
    }
  };

  getStarMasterTable: async function() {
    console.log("dlegate");
    try {
      console.log("del try");
      var output = await masterTableServiceObj.getStarMasterTable();
      console.log(output + "out delegate");
      return output;

    } catch (error) {
      console.log(error);
      return error;
    }
  };


  getSalaryMasterTable: async function() {
    console.log("dlegate");
    try {
      console.log("del try");
      var output = await masterTableServiceObj.getSalaryMasterTable();
      console.log(output + "out delegate");
      return output;

    } catch (error) {
      console.log(error);
      return error;
    }
  };

  getReligionsMasterTable: async function() {
    console.log("dlegate");
    try {
      console.log("del try");
      var output = await masterTableServiceObj.getReligionsMasterTable();
      console.log(output + "out delegate");
      return output;

    } catch (error) {
      console.log(error);
      return error;
    }
  };

  getRelativeTypeMasterTable: async function() {
    console.log("dlegate");
    try {
      console.log("del try");
      var output = await masterTableServiceObj.getRelativeTypeMasterTable();
      console.log(output + "out delegate");
      return output;

    } catch (error) {
      console.log(error);
      return error;
    }
  };

  getProfessionDetailsMasterTable: async function() {
    console.log("dlegate");
    try {
      console.log("del try");
      var output = await masterTableServiceObj.getProfessionDetailsMasterTable();
      console.log(output + "out delegate");
      return output;

    } catch (error) {
      console.log(error);
      return error;
    }
  };

  getMotherTongueMasterTable: async function() {
    console.log("dlegate");
    try {
      console.log("del try");
      var output = await masterTableServiceObj.getMotherTongueMasterTable();
      console.log(output + "out delegate");
      return output;

    } catch (error) {
      console.log(error);
      return error;
    }
  };

  getLanguagesMasterTable: async function() {
    console.log("dlegate");
    try {
      console.log("del try");
      var output = await masterTableServiceObj.getLanguagesMasterTable();
      console.log(output + "out delegate");
      return output;

    } catch (error) {
      console.log(error);
      return error;
    }
  };

  getLagnaMasterTable: async function() {
    console.log("dlegate");
    try {
      console.log("del try");
      var output = await masterTableServiceObj.getLagnaMasterTable();
      console.log(output + "out delegate");
      return output;

    } catch (error) {
      console.log(error);
      return error;
    }
  };

  getGothramMasterTable: async function() {
    console.log("dlegate");
    try {
      console.log("del try");
      var output = await masterTableServiceObj.getGothramMasterTable();
      console.log(output + "out delegate");
      return output;

    } catch (error) {
      console.log(error);
      return error;
    }
  };

  getEducationalQualificationMasterTable: async function() {
    console.log("dlegate");
    try {
      console.log("del try");
      var output = await masterTableServiceObj.getEducationalQualificationMasterTable();
      console.log(output + "out delegate");
      return output;

    } catch (error) {
      console.log(error);
      return error;
    }
  };

  getCityMasterTable: async function() {
    console.log("dlegate");
    try {
      console.log("del try");
      var output = await masterTableServiceObj.getCityMasterTable();
      console.log(output + "out delegate");
      return output;

    } catch (error) {
      console.log(error);
      return error;
    }
  };

  getCasteMasterTable: async function() {
    console.log("dlegate");
    try {
      console.log("del try");
      var output = await masterTableServiceObj.getCasteMasterTable();
      console.log(output + "out delegate");
      return output;

    } catch (error) {
      console.log(error);
      return error;
    }
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
module.exports = masterTableDelegate;
