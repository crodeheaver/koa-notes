const User = require('../data_access/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const _ = require('lodash')

async function genToken (user) {
  return {
    token:
    await jwt.sign(
      _.pick(
        user.toJSON(),
        ['id', 'username', 'email']
      ),
      'shared-secret')
  }
}

async function register (ctx) {
  const body = ctx.request.body
  const salt = await bcrypt.genSalt()

  const passwordHash = await bcrypt.hash(body.passwordConfirmation, salt)

  const user = Object.assign({}, _.omit(body, 'passwordConfirmation'), {salt, passwordHash })

  const newUser = await User.create(user)

  return ctx.ok(await genToken(newUser))
}

async function login (ctx) {
  const user = await User.getOneByEmail(ctx.request.body.email)

  if (user === null) { return ctx.throw(400, 'email or password incorrect') }

  const passwordHash = await bcrypt.hash(ctx.request.body.password, user.salt)

  const jwt = await genToken(user)

  ctx.cookies.set('Authorization', jwt.token, {httpOnly: true})

  return passwordHash == user.passwordHash
    ? ctx.ok(user)
    : ctx.throw(400, 'email or password incorrect')
}

module.exports = {
  register,
  login
}
