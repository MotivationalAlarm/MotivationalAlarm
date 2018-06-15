var express = require('express');
var bodyParser = require('body-parser');
var db = require('../db/index.js')

var app = express();

app.use(express.static(__dirname + '/../client/dist'));


app.listen(3000, function() {
  console.log('listening on port 3000!');
});

db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });