var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.set('view engine', 'pug');

app.use('/public', express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.route('/')
  .get(function(req, res) {
    res.render('baconnect');
  });

app.route('/baconnect')
  .get(function(req, res) {
    res.render('baconnect');
  });

app.route('/v1/users')
  .post(function(req, res) {
    if(!req.body.name) {
      res.status(400).send({ message: 'ユーザ名を入力してください。' });
      return;
    }
    if(req.body.name.length > 10) {
      res.status(400).send({ message: 'ユーザ名は10文字以内にしてください。' });
      return;
    } 

    res.status(201).send({ message: 'OK.' });
  });

var server = app.listen(3000, function() {
  console.log("Node.js is listening to PORT:" + server.address().port);
});

