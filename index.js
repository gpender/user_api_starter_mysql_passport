const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');

require('./config/config');
require ('./config/passport');

var PORT = process.env.PORT || 8080;

const app = express();

// parse application/json
app.use(bodyParser.json());
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());


// add a basic route
app.get('/', function(req, res) {
  res.json({ message: 'Express is up!' });
});
require('./routes/user')(app,passport);

  app.listen(PORT, function() {
    console.log(`==> 🌎 Sorlingas API listening on port ${PORT}!`);
  });