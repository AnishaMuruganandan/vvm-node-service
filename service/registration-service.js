var express = require('express');
var registrationQueries = require('../models/registration-db-queries');
var registrationQueriesConst = require('../query-constants/registration-query-constants');
var registrationService = {

  verifyEmailId: async function(verfiyEmailIdObj) {
      console.log("registrationService");
      var msg = "";
      try {
        var output = await registrationQueries.findByEmailId(registrationQueriesConst.findByEmailIdQuery, verfiyEmailIdObj);
        console.log(JSON.stringify(output) + "output");
        var count = Object.keys(output).length;
        console.log(count);
        if (count == 0) {
          console.log(count + "leng");
          msg = "no entry found";
          console.log(msg + "msg");
        } else {
          msg = "duplicate found";
          console.log(msg + "msg");
        }
      } catch (err) {
        msg = err;
        console.log('Opps, an error occurred', err);
      }
      return msg;
    },

    verifyPhoneNo: async function(verifyPhoneNoObj) {
        console.log("registrationService");
        var msg = "";
        try {
          var output = await registrationQueries.findByPhoneNumber(registrationQueriesConst.findByPhoneNoQuery, verifyPhoneNoObj);
          console.log(JSON.stringify(output) + "output");
          var count = Object.keys(output).length;
          console.log(count);
          if (count == 0) {
            console.log(count + "leng");
            msg = "no entry found";
            console.log(msg + "msg");
          } else {
            msg = "duplicate found";
            console.log(msg + "msg");
          }
        } catch (err) {
          msg = err;
          console.log('Opps, an error occurred', err);
        }
        return msg;
      },

      saveRegistrationDetails: async function(saveRegistrationDetailsObj) {
          console.log("registrationService");
          var msg = "";
          try {
            var output = await registrationQueries.saveAll(registrationQueriesConst.saveAllQuery, saveRegistrationDetailsObj);
            console.log(JSON.stringify(output) + "output");
            msg = "inserted" + output.insertId;
          } catch (err) {
            msg = err;
            console.log('Opps, an error occurred', err);
          }
          return msg;
        },

        updatePassword: async function(updatePasswordObj) {
            console.log("registrationService");
            var msg = "";
            try {
              var output = await registrationQueries.updatePasswordByEmailId(registrationQueriesConst.updatePasswordByEmailIdQuery, updatePasswordObj);
              console.log(JSON.stringify(output) + "output");
              msg = "inserted" + output.affectedRows;
            } catch (err) {
              msg = err;
              console.log('Opps, an error occurred', err);
            }
            return msg;
          },

          updateProfileId: async function(updateProfileIdObj) {
            console.log("registrationService");
            var msg = "";
            try {
              var output = await registrationQueries.updateProfileIdByLoginId(registrationQueriesConst.updateProfileIdByLoginIdQuery, updateProfileIdObj);
              console.log(JSON.stringify(output) + "output");
              msg = "inserted" + output.affectedRows;
            } catch (err) {
              msg = err;
              console.log('Opps, an error occurred', err);
            }
            return msg;
          },


}

module.exports = registrationService;
