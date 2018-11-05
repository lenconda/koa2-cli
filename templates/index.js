const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  ctx.body = {
    title: 'Hello Koa 2!'
  }
  await next()
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    status: 1,
    message: 'OK',
    data: 'koa2 json'
  }
})

module.exports = router
