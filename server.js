var express = require('express');
var path = require('path');
var app = express();
var cors = require('cors');
var registrationRoutes = require('./routes/registration-routes');
var loginRoutes = require('./routes/login-routes');

var errorPg = path.join(__dirname, "./public/404.html");

// var route = require('./routes/masterTableDetailsRoutes');

var bodyParser = require('body-parser');
app.use(express.static(path.join(__dirname, 'public')));

console.log("hey an in server");
var port = process.env.PORT || 9872;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/registration', registrationRoutes);
app.use('/login', loginRoutes);
// app.use('/profile', "./public/profile.html");

// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
// //  next(err);
//
//   console.error('hey!');
//   res.sendFile(errorPg);
// });

app.get("*", function(req,res){
  res.sendFile(errorPg);
});

app.listen(port, "0.0.0.0", function() {
  console.log("Listening on Port" + port);

});
