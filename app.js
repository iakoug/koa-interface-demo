const app = new (require('koa2'))()

const middleWare = require('./middleware')

const router = require('./router')

middleWare(app)

router(app)

app.listen(4000, () => {
  console.log('server is running at http://localhost:4000/banner')
})
