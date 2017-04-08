var express = require("express");
var app = express();

app.set('view engine', 'pug');

app.route('/')
  .get(function(req, res) {
    res.render('index');
  });

app.route('/baconnect')
  .get(function(req, res) {
    res.render('index');
  });

var server = app.listen(3000, function() {
  console.log("Node.js is listening to PORT:" + server.address().port);
});

