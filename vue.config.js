const path = require('path');
const webpack = require('webpack');
//引入path模块
function resolve(dir) {
    return path.join(__dirname, dir)
}
//扩充知识点
//__dirname 表示当前文件所在的目录的绝对路径
//__filename 表示当前文件的绝对路径
//module.filename ==== __filename 等价
//process.cwd() 返回运行当前脚本的工作目录的路径
//process.chdir() 改变工作目录
module.exports = {
    //基本路径
    publicPath: './', //   ./表示静态相对路径  /项目/ 服务器上的相对路径 
    //输出文件目录
    outputDir: 'outputFile',
    //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
    assetsDir:'static',
    // use the full build with in-browser compiler? https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
    //	compiler: false,
    // eslint-loader 是否在保存的时候检查
    lintOnSave: false,
    // webpack配置 see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md 
    chainWebpack: (config) => { //设置路径别名
        config.resolve.alias
            .set('@', resolve('src'))
            .set('assets', resolve('src/assets'))
            .set('components', resolve('src/components'))
            .set('views', resolve('src/views'))
            .set('vue$', 'vue/dist/vue.esm.js'),
            config.module
            .rule('vue')
            .use('vue-loader')
            .loader('vue-loader')
            .tap(options => {
                // modify the options...
                return options
            })
    },
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'development') {
            config.devtool = 'source-map'
            // mutate config for production...
        } else {

        }
    },
    // vue-loader 配置项 https://vue-loader.vuejs.org/en/options.html
    //	vueLoader: {},  、、打开会报错
    // 生产环境是否生成 sourceMap 文件
    productionSourceMap: true,
    // css相关配置
    css: {
        // 是否使用css分离插件 ExtractTextPlugin
        extract: true,
        // 开启 CSS source maps?
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {
            css: {
                // options here will be passed to css-loader
            },
            postcss: {
                // options here will be passed to postcss-loader
            }
        },
        // 启用 CSS modules for all css / pre-processor files.
        modules: false
    },
    // use thread-loader for babel & TS in production build  enabled by default if the machine has more than 1 cores
    //	parallel: require('os').cpus().length > 1,
    // 是否启用dll See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#dll-mode
    //	dll: false,
    // PWA 插件相关配置  see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
    // pwa: { //https://www. uis.cc/2018/02/27/New-features-of-vue-cli-3-speed/
    //     workboxPluginMode: 'InjectManifest',
    //     workboxOptions: {
    //         // swSrc 中 InjectManifest 模式下是必填的。
    //         swSrc: 'dev/sw.js',
    //         // ...其它 Workbox 选项...
    //     },
    // },

    // webpack-dev-server 相关配置
    devServer: {
        open: process.platform === 'darwin', //是否自动启动服务器
        host: '0.0.0.0', //设置本机为区域内可以访问
        port: 8081,
        https: false,
        hotOnly: false,
        proxy: { //代理路径 -->可以是任意多个
            "/api": {
                target: "http://192.168.123.77:9092", //替换自己的代理路径
                changeOrgin: true,
                pathRewrite: {
                    '^/api': '/'
                }
            },
            "/sec": {
                target: "http://192.168.123.77:9094",
                changeOrgin: true,
                pathRewrite: {
                    '^/sec': '/'
                }
            },
        }, // 设置代理
        before: app => {}
    },
    parallel: require('os').cpus().length > 1,
    // 第三方插件配置,这是一个不进行任何 schema 验证的对象，因此它可以用来传递任何第三方插件选项。例如
    pluginOptions: {
        foo: {
            // 插件可以作为 `options.pluginOptions.foo` 访问这些选项。
        }
    }
}