var express = require('express');
var path = require('path');
var app = express();
var cors = require('cors');
var route = require('./routes/registration-routes');
var loginRoutes = require('./routes/loginRoutes');

//
// var route = require('./routes/masterTableDetailsRoutes');

var bodyParser = require('body-parser');
app.use(express.static(path.join(__dirname, 'public')));

var port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
console.log("yes");

app.use('/register', route);
app.use('/login', loginRoutes);

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
app.listen(port, "0.0.0.0", function() {
  console.log("Listening on Port" + port);

});
