const sqlite = require('sqlite'),
      Sequelize = require('sequelize');

let sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './db/database.db'
});

module.exports = sequelize;