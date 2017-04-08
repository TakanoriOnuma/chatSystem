var express = require("express");
var app = express();

app.set('view engine', 'pug');

app.use('/public', express.static(__dirname + '/public'));

app.route('/')
  .get(function(req, res) {
    res.render('baconnect');
  });

app.route('/baconnect')
  .get(function(req, res) {
    res.render('baconnect');
  });

var server = app.listen(3000, function() {
  console.log("Node.js is listening to PORT:" + server.address().port);
});

