const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const siteusers = require('./api/siteusers')
const recipes = require('./api/recipes')
const reviews = require('./api/reviews')
const ingredients = require('./api/ingredients')
const recipesteps = require('./api/recipesteps')
const ingredientsrecipes = require('./api/ingredientsrecipes')
const recipereviews = require('./api/recipereviews')
const reviewusers = require('./api/reviewusers')

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(cors())
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/siteusers', siteusers);
app.use('/api/recipes', recipes);
app.use('/api/reviews', reviews);
app.use('/api/ingredients', ingredients);
app.use('/api/recipesteps', recipesteps);
app.use('/api/ingredientsrecipes', ingredientsrecipes);
app.use('/api/recipereviews', recipereviews);
app.use('/api/reviewusers', reviewusers);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: req.app.get('env') === 'development' ? err : {}
  });
});

module.exports = app;
