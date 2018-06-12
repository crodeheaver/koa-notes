const Note = require('../data_access/note')

async function updateNote (ctx) {
  return ctx.ok(await Note.update(ctx.request.id, ctx.request.body))
}

async function deleteNote (ctx) {
  return ctx.ok(await Note.delete(ctx.request.id))
}

module.exports = {
  updateNote,
  deleteNote
}