const Note = require('../models/note')

const updateNote = (id, note) => {
  return Note.update(note, { where: { id }})
}

const deleteNote = id => {
  return Note.destroy({ where: { id }})
}

module.exports = {
  updateNote,
  deleteNote
}