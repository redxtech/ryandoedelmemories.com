require('dotenv').config()

const cors = async (ctx, next) => {
  const allowedOrigins = process.env.ORIGINS.split(',')
  const origin = ctx.req.headers.origin
  if (allowedOrigins.indexOf(origin) > -1) {
    ctx.set('Access-Control-Allow-Origin', origin)
  }
  ctx.set('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept')
  ctx.set('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
  await next()
}

const responseTime = async (ctx, next) => {
  const t1 = Date.now()
  await next()
  const t2 = Date.now()
  ctx.set('X-Response-Time', Math.ceil(t2 - t1) + 'ms')
}

const home = async (ctx, next) => {
  ctx.status = 200
  ctx.body = 'henlo fren'
}

module.exports = {
  cors,
  responseTime,
  home
}
