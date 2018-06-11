var jwt = require('koa-jwt');
module.exports = (router) => {
  router.prefix('/v1')

  router.use('/auth', require('./auth'))
    
  router.use(jwt({ secret: 'shared-secret' }))
    
  router.use('/user', require('./user'))
}