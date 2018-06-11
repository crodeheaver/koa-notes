const Sequelize = require('sequelize');

const connection = new Sequelize('noted', null, null, {
  dialect: 'sqlite',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  storage: './database.sqlite',
  operatorsAliases: false
});

module.exports = connection