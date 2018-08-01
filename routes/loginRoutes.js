var express = require('express');
var router = express.Router();

var Task = require('../models/dbqueries');

router.post('/', function(req, res, next) {
  	console.log('body: ' + JSON.stringify(req.body));
var obj=req.body;

console.log("onj"+JSON.stringify(obj));
    Task.addLoginDetails(obj, function(err, count) {
        if (err) {
            res.json(err);
            console.log(err+"err");
        } else {

            res.json(count);
        }
    });
});

module.exports = router;
