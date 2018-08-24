var dotenv = require('dotenv');
dotenv.config();
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var PORT = 3000;
var path = require('path');
var hbs = require('express-handlebars');
var flash = require('connect-flash');
var expressMessages = require('express-messages');
var session = require('express-session');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
    resave: true
  })
);

app.use(flash());
app.use((req, res, next) => {
  res.locals.messages = expressMessages(req, res);
  next();
});

app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', hbs());
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/public'));

var views = require('./routes/viewsRoutes');
var apiRoutes = require('./routes/apiRoutes');

app.use('/', views);
app.use('/api', apiRoutes);

app.listen(PORT, function() {
  console.log('Hot Restaurant App is running on port', PORT);
});
