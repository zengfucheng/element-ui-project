/**
 *
 * name: home
 * date: 2019/2/1
 * author: cengfucheng
 * about:
 *
 */
const router = require('koa-router')();

// const rg = require('superagent');

// const request = require('request');

const axios = require('axios');
// const querystring = require('querystring');

const fs = require('fs');


router.get('/', (ctx, next) => {
    ctx.response.status = 200;
    ctx.body = 'hello world.';
    next();
});
router.get('home', (ctx, next) => {
    // console.log(ctx.request.query[0]);
    // console.log(JSON.parse(ctx.request.query[0]))
    ctx.response.status = 200;
    // ctx.body = JSON.stringify({name:'hello world.'});


    // 返回vue项目打包文件
    ctx.response.type = 'html';
    ctx.response.body = fs.createReadStream('./web/index.html')

    // next();
});
router.post('home', (ctx, next) => {
    console.log(ctx.request.body)
    ctx.response.status = 200;
    ctx.body = JSON.stringify({name:'hello world.'});
    // next();
});

let serversUrl = 'http://agree.acaas-gateway:31080';
router.post('*', async (ctx, next) => {
    // 代理
    // ctx.status = 200;

    let url = serversUrl + ctx.req.url;
    console.log(JSON.stringify(ctx.request.body));
    console.log(url);

    let method = ctx.request.method.toLowerCase();
    console.log(method);
    await axios[method](
        url,
        ctx.request.body
    ).then( data => {
        // console.log(data);
        ctx.status = data.status;
        ctx.body = {name:'zfc'}
    }).catch( err => {
        // console.log(err);
    })

    // await request(
    //     {
    //         method: 'POST',
    //         preambleCRLF: true,
    //         postambleCRLF: true,
    //         uri: url,
    //         json: true,
    //         body: JSON.stringify(ctx.request.body)
    //         // multipart: [
    //         //     {
    //         //         'content-type': 'application/json',
    //         //         body: ctx.request.body
    //         //     }
    //         // ]
    //     },
    //     (err, response, body) => {
    //         if(err) {
    //             console.log(err);
    //             return
    //         };
    //         // console.log(response,'返回体');
    //         ctx.body = body;
    //         ctx.status = response.statusCode;
    //
    //         console.log(body, '数据体');
    //         // console.log(ctx.status, '数据体');
    //     }
    // )
});
module.exports = router;
