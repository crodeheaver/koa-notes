var jwt = require('koa-jwt');
module.exports = (router) => {
  router.prefix('/v1')

  router.use('/auth', require('./auth'))
    
  router.use(jwt({ secret: 'shared-secret', cookie: 'Authorization' }))
    
  router.use('/user', require('./user'))

  router.use('/note', require('./note'))
}