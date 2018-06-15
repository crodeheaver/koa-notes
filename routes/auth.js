const Router = require('koa-router')
const router = new Router()
const Ctrl = require('../controllers/auth')

router.post('/register', Ctrl.register)
router.post('/login', Ctrl.login)
router.post('/logout', Ctrl.logout)
router.get('/user', Ctrl.getLoggedInUser)

module.exports = router.routes()
