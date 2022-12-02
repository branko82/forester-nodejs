var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.set('view engine', 'pug');

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  res.render('index_2', { title: 'Hey', name: req.body.name })
});

var server = app.listen(port, function () {
  console.log("App listening at port " + port)
})

