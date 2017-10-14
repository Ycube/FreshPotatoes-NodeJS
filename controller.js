var db = require('./config');

function Controller() {
    this.getAllFilms = function(req, res) {
      db.query("SELECT * FROM films")
        .then(function(films) {
            res.json(films);
        })
    }

    //TODO:
    // function getFilmRecommendations(req, res) {
    //   res.status(500).send('Not Implemented');
    // }
};



module.exports = new Controller();