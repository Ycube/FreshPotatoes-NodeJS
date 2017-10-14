var router = require('express').Router();
var controller = require('./filmController');

router.get('/', controller.get);
router.get('/allFilms', controller.getAllFilms);
router.get('/:film_id/recommendations', controller.getFilmRecommendations)


module.exports = router;