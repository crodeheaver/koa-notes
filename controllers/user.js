const User = require('../data_access/user')

async function getAll (ctx) {
  return ctx.ok(await User.getAll())
}

async function getOne (ctx) {
  return ctx.ok(await User.getOne(ctx.query.id))
}

async function getNotes (ctx) {
  console.log('there')
  return ctx.ok(await User.getNotes(ctx.state.user.id))
}

async function createNote (ctx) {
  return ctx.ok(await User.createNote(ctx.state.user.id, ctx.request.body))
}

module.exports = {
  getAll,
  getOne,
  getNotes,
  createNote
}