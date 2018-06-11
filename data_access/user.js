const User = require('../models/user')
const uuidv4 = require('uuid/v4')

const getAll = () => {
  return User.findAll()
  .catch(err => err)
}

const getOne = (id) => {
  return User.findById(id)
}

const getOneByEmail = (email) => {
  return User.findOne({email})
}

const getNotes = (id) => {
  console.log('here')
  return getOne(id).then((user)=> user.getNotes())
}

const createNote = (id, note) => {
  return getOne(id).then((user)=> user.createNote(Object.assign({}, note, {id: uuidv4()})))
}

const create = (user) =>{
  return User.create(Object.assign({}, user, {id: uuidv4()}))
}

module.exports = {
  getAll,
  getOne,
  getOneByEmail,
  getNotes,
  createNote,
  create
}