const router = require('koa-router')()

router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = {
    status: 1,
    message: 'this is a users response!'
  }
})

router.get('/bar', function (ctx, next) {
  ctx.body = {
    status: 1,
    message: 'this is a users/bar response'
  }
})

module.exports = router
