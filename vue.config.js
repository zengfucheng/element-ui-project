/**
 *
 * name: vue.config
 * date: 2019/4/22
 * author: cengfucheng
 * about: vue 3.0 webpack 额外补丁配置
 *
 */

const path = require('path');
// const CopyPlugin = require('copy-webpack-plugin');


const debug = process.env.NODE_ENV !== 'production';

function resolve(dir,...more) {
    let type = Object.prototype.toString.call(dir);
    let typeName = type.slice(8, type.length-1);
    if(typeName == 'Object') return path.resolve({...dir},...more);
    if(typeName == 'Array') return path.resolve([...dir],...more);
    if(typeName == 'String') return path.resolve(dir,...more);
    console.error('路径不合法');
    process.exit();

}

const alias_list = [
    // 配置常用的引用路径
    {
        name: 'Api',
        value: 'src/api'
    }
]

const assetsDir = 'static';         //  输出文件地址
const outputDir = resolve('servers','web');        // 输出文件目录

module.exports = {
    assetsDir: assetsDir,
    outputDir: outputDir,

    pwa: {                              // 浏览器图标
        iconPaths: {
            favicon32: 'favicon.ico',
            favicon16: 'favicon.ico',
            appleTouchIcon: 'favicon.ico',
            maskIcon: 'favicon.ico',
            msTileImage: 'favicon.ico'
        }
    },

    // webpack 简单配置方案
    configureWebpack: (config) => {
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置...
        } else {
            // 为开发环境修改配置...
        }
    },
    // configureWebpack: {
    //     plugins: [
    //         new CopyPlugin([
    //             { from: resolve('static'), to: resolve('dist'), toType: 'dir', ignore: ['.DS_Store']},
    //         ])
    //     ]
    // },

    // webpack 配置进行更细粒度的修改  https://cli.vuejs.org/zh/config/#chainwebpack
    chainWebpack: (config) => {

        // console.log(config.mode(),'打包方式',process.env.NODE_ENV)

        // 增加 相对路径 快捷名
        alias_list.forEach( (v, i) => {
            config.resolve.alias.set(v.name, path.resolve(v.value) )
        });


        // 清除base自带的svg配置
        config.module
            .rule('svg')
            .uses.clear()


        // end方法最常用了，一旦出现 没有找到 **方法或者属性，就意味着你没有在某条链式下，调用end
        // end调用后，返回一个配置对象，就又有各种对象
        config.module
            .rule('svg-sprite')
            .test(/\.(svg)(\?.*)?$/)
            // .test(/\.svg$/)
            .exclude
                .add(resolve('static'))
            .end()
            .include
                .add(resolve('src/icons'))
            .end()
            .use('svg-sprite-loader')
                .loader('svg-sprite-loader')
                .options({
                    symbolId: 'icon-[name]'
                })
            .end()

        // config.module
        //     .rule('less')
        //     .test(/\.less$/)
        //     .use('less-loader')
        //     .loader('less-loader')


        config
            .plugin('copy')
            .tap(args => {      // 采用修改的方式， 往vue的配置插入新的内容。奶奶的
                args[0].push({
                    from: resolve('static'),
                    to: resolve(outputDir,assetsDir),
                    toType: 'dir',
                    ignore: [
                        // '.DS_Store',
                        // '*.js',
                        '.*',
                        '*.md'
                    ]
                });
                return args;
            })
                // .use(require('copy-webpack-plugin'),     // 设置的方式，会覆盖掉vue的配置，不好
                //     [[
                //         {
                //             from: resolve('static'),
                //             to: resolve('dist/static'),
                //             toType: 'dir',
                //             ignore: [
                //                 '.DS_Store'
                //             ]
                //         }
                //     ]]
                // )
    }

}



