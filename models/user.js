const Sequelize = require('sequelize')
const Note = require('./note')
const connection = require('../data_access/connection')

const User = connection.define('user', {
  id: {
    type: Sequelize.UUIDV4,
    primaryKey: true
  },
  username: {
    type: Sequelize.STRING(40),
    allowNull: false,
    unique: true
  },
  email: {
    type: Sequelize.STRING(254),
    allowNull: false,
    unique: true
  },
  passwordHash: {
    type: Sequelize.STRING(128),
    allowNull: false,
    unique: true
  },
  salt: {
    type: Sequelize.STRING(16).BINARY,
    allowNull: false,
    unique: true
  },
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE
})

const UserNotes = connection.define('UserNote', {
  accessType: Sequelize.STRING(1)
})

Note.belongsToMany(User, {through: UserNotes})
User.belongsToMany(Note, {through: UserNotes})

module.exports = User
