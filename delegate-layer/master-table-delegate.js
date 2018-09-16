var express = require('express');
var masterTableServiceObj = require('../service/master-table-service');
var masterTableObject = require('../objects/master-table-obj');

var masterTableDelegate = {

  getZodiacMasterTable: async function(emailId) {
    console.log("dlegate");
    // var verfiyEmailIdObj = new registrationObject.verifyEmailIdObj(emailId);
    try {
      console.log("del try");
      var output = await masterTableServiceObj.getZodiacMasterTable();
      console.log(output + "out delegate");
      return output;

    } catch (error) {
      console.log(error);
      return error;
    }
  }

}
module.exports = masterTableDelegate;


queries.getZodiacMasterTable(function(err, rows) {
  if (err) {
    res.json(err);
  } else {
    var output = {};
    output.zodiacId = rows[0].zodiac_id;
    output.zodiacName = rows[0].zodiac_name;
    res.json(output);
  }
});
