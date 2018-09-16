var express = require('express');
var masterTableQueries = require('../models/master-table-db-queries');
var masterTableQueriesConst = require('../query-constants/master-table-query-constant');
var masterTableService = {

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
  }



}

module.exports = masterTableService;
