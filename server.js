var express = require('express');
var path = require('path');
var app = express();
var cors = require('cors');
var route = require('./routes/loginRoutes');

var bodyParser = require('body-parser');
app.use(express.static(path.join(__dirname, 'public')));

  var port = process.env.PORT || 3000;

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
console.log("yes");
 app.use('/Tasks/about', route);
 app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
    app.listen(port, "0.0.0.0", function() {
    console.log("Listening on Port" +port);

    });
