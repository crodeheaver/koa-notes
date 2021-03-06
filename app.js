const Koa = require('koa')
const Router = require('koa-router')
const Logger = require('koa-logger')
const Cors = require('@koa/cors')
const BodyParser = require('koa-bodyparser')
const Helmet = require('koa-helmet')
const respond = require('koa-respond')
const jwt = require('koa-jwt')

const app = new Koa()
const router = new Router()

app.use(Helmet())

if (process.env.NODE_ENV === 'development') {
  app.use(Logger())
}

app.use(Cors({origin: 'http://localhost:3000', 'allowHeaders': ['Authorization', 'Content-Type', 'Origin', 'X-Requested-With', 'Accept'], 'credentials': 'true'}))

app.use(jwt({ secret: 'shared-secret', cookie: 'Authorization' }).unless({ path: [/^\/v1\/auth\/l/, '/v1/auth/register'] }))

app.use(BodyParser({
  enableTypes: ['json'],
  jsonLimit: '5mb',
  strict: true,
  onerror: function (err, ctx) {
    ctx.throw('body parse error', 422)
  }
}))

app.use(respond())

// API routes
require('./routes')(router)
app.use(router.routes())
app.use(router.allowedMethods())

module.exports = app
