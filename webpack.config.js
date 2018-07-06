const webpack =require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    devtool: 'source-map',
    mode: "development",//   production
    entry:  __dirname + "/app/index.js",//已多次提及的唯一入口文件
     // entry:  __dirname + "/app/components/HomeHeader/index.js",//已多次提及的唯一入口文件
    output: {
        path: __dirname + "/build",//打包后的文件存放的地方
        filename: "bundle.js"//打包后输出文件的文件名
    },
    devServer: {
        contentBase: "./build",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true,//实时刷新
        hot: true,
        //host:'127.0.0.1',
        proxy: {
            '/api/*': {
                target: 'http://127.0.0.1:3000',
                //pathRewrite: {'^/data': ''},
                secure: false, // 接受 运行在 https 上的服务
                changeOrigin: true
            }
        },
        disableHostCheck: true
    },
    module: {
        rules: [
            {
                test: /(\.js|\.jsx|\index.jsx)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["env", "react",'stage-3'],
                        plugins: ["transform-decorators-legacy"]
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                use: [{loader: "style-loader"},
                      {loader: "css-loader"},
                      {loader: "less-loader"}  
                ]
            },
            // {
            //     test:/\.(jpg|png)\??.*$/,
            //     use:[
            //         'file-loader'
            //     ]
            // },
            // {
            //     test: /\.png$/,
            //     use: 'url-loader?limit=1024&name=[path][name].[ext]&outputPath=img/&publicPath=output/',
            // },
            {
    　　　　　　test: /\.(png|jpg)$/,
    　　　　　　loader: 'url-loader?limit=819&name=images/[hash:8].[name].[ext]'
    　　　　},
            {
                test: /\.(htm|html)$/i,
                 use:[ 'html-withimg-loader'] 
            }
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),//热加载插件
        //new ExtractTextPlugin('app/fonticon/style.css')//字体图标路径--为什么会报错呢？
    ]
}
