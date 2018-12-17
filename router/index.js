const router = require('koa-router')()

const Controller = require('./../controller')

module.exports = app => {
  app.use(router.routes())
  
  app.use(router.allowedMethods())

  router.get('/banner', Controller.banner)

  router.get('/recommend', Controller.recommend)
}