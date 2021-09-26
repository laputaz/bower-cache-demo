// app.js 入口
const Koa = require('koa')
const app = new Koa()
const routes = require('./routes.js').routes

app.use(routes)

// 公共, 均返回文件
const base = async (ctx) => {
    ctx.response.type = 'text/html'
    ctx.response.body = `<h1>Hello, ${ctx.path.slice(1)}</h1>`
    console.log('This is a response from server side.')
}
// 对于任何请求，app将调用该异步函数处理请求：
app.use(base);
// 在端口3000监听:
app.listen(3000);