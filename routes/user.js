const Router = require('koa-router')
const router = new Router()
const Ctrl = require('../controllers/user')

router.get('/', Ctrl.getAll)
router.get('/:id', Ctrl.getOne)
router.get('/:id/notes', Ctrl.getNotes)
router.post('/:id/notes', Ctrl.createNote)


module.exports = router.routes()