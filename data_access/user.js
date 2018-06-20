const User = require('../models/user')
const uuidv4 = require('uuid/v4')

const getAll = () => {
  return User.findAll({ attributes: ['id', 'username', 'email']})
    .catch(err => err)
}

const getOne = (id) => {
  return User.findById(id, { attributes: ['id', 'username', 'email']})
}

const getOneByEmail = (email) => {
  return User.findOne({ where: {email}, attributes: ['id', 'username', 'email']})
}

const getNotes = (id) => {
  return getOne(id).then((user) => user.getNotes())
}

const create = (user) => {
  return User.create(Object.assign({}, user, {id: uuidv4()}))
}

const createNote = (id, note) => {
  return getOne(id).then((user) => user.createNote(Object.assign({}, note, {id: uuidv4()}), { through: { accessType: 'O'}}))
}

module.exports = {
  getAll,
  getOne,
  getOneByEmail,
  getNotes,
  createNote,
  create
}
