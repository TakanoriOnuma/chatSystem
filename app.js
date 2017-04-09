var express = require('express');
var bodyParser = require('body-parser');
var bookieParser = require('cookie-parser');
var session = require('express-session');

var app = express();

app.set('view engine', 'pug');

app.use('/public', express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(session({
  secret: 'key',
  resave: false,
  saveUninitialized: false,
  cookie: null
}));

app.route('/')
  .get(function(req, res) {
    res.render('baconnect');
  });

app.route('/baconnect')
  .get(function(req, res) {
    res.render('baconnect');
  });

app.route('/rooms')
  .get(function(req, res) {
    // セッション情報がないならトップページに戻る
    if(!req.session.user) {
      res.redirect('/');
      return;
    }
    res.render('rooms')
  });

app.route('/v1/users')
  .post(function(req, res) {
    if(!req.body.name) {
      res.status(400).send({ message: 'ニックネームを入力してください。' });
      return;
    }
    if(req.body.name.length > 10) {
      res.status(400).send({ message: 'ニックネームは10文字以内にしてください。' });
      return;
    }

    // セッションに登録
    req.session.user = req.body;
    res.status(201).send({ message: 'OK.' });
  });

var server = app.listen(3000, function() {
  console.log("Node.js is listening to PORT:" + server.address().port);
});

