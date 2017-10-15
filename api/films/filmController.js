var models = require ('../../models');

exports.get = (req, res) => {
  res.send("API Endpoint for Films");
};

exports.getAllFilms = (req, res) => {
    models.Films.sequelize.query("SELECT * FROM films")
        .then(function(films) {
            res.json(films);
        });
};

exports.getFilm = (req, res, next) => {
  let reqId = req.params.film_id;
  models.Films.findAll({
    where: {
      id: reqId
    }
  }).then((foundFilm) => {
    res.json(foundFilm)
  }).catch(next);
}

exports.getFilmRecommendations = (req, res, next) => {
  let givenId = req.params.film_id;
  let genreId;
  
  models.Films.findAll({where: {id : givenId}})
    .then((foundfilm) => {
      if (foundfilm === [] || foundfilm === null || foundfilm === '') {
        res.json({"message": "no film found"})
      } else {
        genreId = foundfilm[0].genre_id;
        models.Films.findAll({where : { genre_id : genreId}})
        .then((foundFilms) => {
          if (foundFilms === [] || foundFilms === null || foundFilms === '') {
            res.json({"message": "no film found"})
          } else {
            res.json({
              'recommendations': foundFilms
            })
          }
        }).catch(next);
      }
    }).catch(next);
};

