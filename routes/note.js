const Router = require('koa-router')
const router = new Router()
const Ctrl = require('../controllers/note')

router.put('/:id/notes/:id', Ctrl.updateNote)
router.delete(':/id/notes/:id', Ctrl.deleteNote)


module.exports = router.routes()