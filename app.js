var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const fetch = require('node-fetch');
let login = require('./routes/login');




var expressValidator = require('express-validator');
let bodyParser = require('body-parser');
let multer = require('multer');
let flash = require('connect-flash');
let session = require('express-session');
let passport = require('passport');
let localStrategy = require('passport-local').Strategy;

//routes
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
let registerRouter = require('./routes/register');

var app = express();



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//Handle file uploads
app.use(multer({dest: './uploads'}));


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Handle Express Sessions
app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}
 

));

// passport
app.use(passport.initialize());
app.use(passport.session());


// Validator
// app.use(expressValidator({
//   errorFormatter: function(param, msg, value) {
//       var namespace = param.split('.')
//       , root    = namespace.shift()
//       , formParam = root;

//     while(namespace.length) {
//       formParam += '[' + namespace.shift() + ']';
//     }
//     return {
//       param : formParam,
//       msg   : msg,
//       value : value
//     };
//   }
// }));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(flash());
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});

app.get('*', function(req, res, next){
    res.locals.user = req.user || null;
    next();
});



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//Routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', login);
app.use('/register', registerRouter);
console.log(login)
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
