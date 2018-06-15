module.exports = (router) => {
  router.prefix('/v1')

  router.use('/auth', require('./auth'))

  router.use('/user', require('./user'))

  router.use('/note', require('./note'))
}
