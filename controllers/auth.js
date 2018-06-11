const User = require('../data_access/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const _ = require('lodash')

async function genToken(user){
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

  const user =  Object.assign({}, _.omit(body, 'passwordConfirmation'), {salt, passwordHash })

  const newUser = await User.create(user)

  return ctx.ok(await genToken(newUser))
}

async function login (ctx) {
  const user = await User.getOneByEmail(ctx.request.body.email)

  const body = ctx.request.body

  const passwordHash = await bcrypt.hash(body.password, user.salt)

  return passwordHash == user.passwordHash ? 
  ctx.ok(await genToken(user)) :
  ctx.bad("incorrect password")
}

module.exports = {
  register,
  login
}