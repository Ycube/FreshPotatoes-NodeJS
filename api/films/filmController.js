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

exports.getFilmRecommendations = (req, res) => {
  res.status(500).send('Not Implemented');
}

