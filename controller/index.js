module.exports = {
  banner: ctx => ctx.response.body = require('../database/banner.json'),
  recommend: ctx => ctx.response.body = require('../database/recommend.json')
}
