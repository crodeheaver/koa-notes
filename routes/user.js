const Router = require('koa-router')
const router = new Router()
const Ctrl = require('../controllers/user')

router.get('/', Ctrl.getAll)
router.get('/notes', Ctrl.getNotes)
router.post('/notes', Ctrl.createNote)
router.put('/notes/:id', Ctrl.createNote)
router.delete('/notes/:id', Ctrl.createNote)
router.get('/:id', Ctrl.getOne)


module.exports = router.routes()