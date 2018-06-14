const Sequelize = require('sequelize')
const connection = require('../data_access/connection')

const Note = connection.define('note', {
  id: {
    type: Sequelize.UUIDV4,
    primaryKey: true
  },
  title: Sequelize.STRING(50),
  text: Sequelize.STRING(500),
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE
})

module.exports = Note
