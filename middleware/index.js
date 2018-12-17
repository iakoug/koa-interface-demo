const chalk = require('chalk')

const log = txt => console.log(chalk.green(txt))

const logger = () =>  {
  return async (ctx, next) => {
    const start = Date.now()

    await next()

    const responseTime = (Date.now() - start)

    log(`response: ${responseTime / 1000}s from ${JSON.stringify(ctx['header']['user-agent'])}`)
  }
}

module.exports = (app) => {
  app.use(logger())
}