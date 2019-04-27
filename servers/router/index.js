/**
 *
 * name: index
 * date: 2019/2/1
 * author: cengfucheng
 * about: 路由
 *
 */
const router = require('koa-router')();

const home = require('./home');

router.use('/', home.routes(), home.allowedMethods());

module.exports = router;
