var router = require('express').Router();

router.use('/films', require('./films/filmRoutes'));

module.exports = router;
