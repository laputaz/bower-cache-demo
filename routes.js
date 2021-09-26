// router.js
const Router = require('koa-router')
const router = new Router()

// expires
router.get('/test-expires', (ctx, next) => {
    ctx.set('Expires', 'Sun, 26 Sep 2021 08:39:03 GMT')
    next()
})

// cache-control
router.get('/test-cache-control', (ctx, next) => {
    ctx.set('Cache-Control', 'max-age=2000000')
    next()
})

// Last-Modified
router.get('/test-last-modified', (ctx, next) => {
    ctx.set('Cache-Control', 'no-cache')
    // 设置 Last-Modified
    // 对请求头中的 If-Modified-Since 与文件修改时间,
    if (true) {
        // 发现文件时间未更新，返回 304，让浏览器读缓存。
        ctx.response.status = 304
    } else {
        // 发现文件时间已更新，更新 Last-Modified
        ctx.set('Last-Modified', 'Sun, 28 Sep 2021 21:39:03 GMT')
    }
    next()
})

// etag
router.get('/test-etag', (ctx, next) => {
    ctx.set('Cache-Control', 'no-cache')
    // 对请求头中的 If-None-Match 与文件标识作对比,
    if (true) {
        // 发现文件时间未更新，返回 304，让浏览器读缓存。
        ctx.response.status = 304
    } else {
        // 发现文件时间已更新，更新 Etag
        ctx.set('Etag', '1234')
    }
})

exports.routes = router.routes()