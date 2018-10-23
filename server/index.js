const Koa = require('koa')
const Router = require('koa-router')
const json = require('koa-json')
const bodyParser = require('koa-bodyparser')
// const koaStatic = require('koa-static')

const { submitForm, fetchGallery } = require('./database')
const { cors, responseTime, home } = require('./funcs')

const app = new Koa()
const r = new Router()

app.use(json())
// app.use(koaStatic(join(__dirname, '..', 'dist')))
app.use(cors)
app.use(responseTime)
app.use(bodyParser())

r.get('/', home)
r.all('/submit-form', submitForm)
r.all('/fetch-gallery', fetchGallery)

app.use(r.routes())

const port = process.env.PORT || 8000
// const port = process.env.PORT || 8080

app.listen(port)
console.log(`Listening on port ${port}...`)
