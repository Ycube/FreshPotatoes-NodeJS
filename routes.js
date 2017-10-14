'use strict'
var path = require('path');
var controller = require('./controller.js');

module.exports = function(app) {


  app.get('/allFilms', controller.getAllFilms);
  
  // TODO:
  // app.get('/films/:id/recommendations', getFilmRecommendations);

};