
1:git clone 项目到本地
2：init  ，把命令写入json文件
3：安装webpack
	cnpm install webpack webpack-dev-server webpack-cli --save-dev
4：安装react依赖
	cnpm install react react-dom --save-dev
5：新建文件夹以及indexhtml及css文件
6：新建configjs文件--引入最基本的配置（输入输出）；然后配置devserver入口文件夹--必须有jsxloader才能打包react
7：安装babel解析jsx
	cnpm install --save-dev babel-core babel-loader babel-preset-env babel-preset-react
    然后在config中对loader进行配置；
 ++++++++++++到这里可以正常打包和打开页面了+++++++++++++++++++++
 注意：入口页面的render也需要引入，render里面只能放组件标签，--可是前面为什么会出错呢？
8：启用热刷新插件    -----------在import的主文件中无法用子组件传递给父组件
	cnpm install --save-dev babel-plugin-react-transform react-transform-hmr
	webpack.HotModuleReplacementPlugin  --在config中devserver中配置:hot:true,
	然后新建babelrc，配置babelrc
9：解析less
    cnpm install  less less-loader  css-loader style-loader--save-dev   找不到sytle-loader
10：引入router
    cnpm install react-router-dom --save-dev   dom在这里没啥用
    cnpm install react-router --save-dev   还是需要router
    // cnpm install --save-dev react-router@2.8.1     //必须更换版本
    // cnpm install array-includes has --save-dev   低版本router还不得不配合--这个不行，需要其他依赖太多了
    cnpm install react-swipe --save-dev    都可以正常引用--轮播图用；
11：cnpm install es6-promise --save-dev
12:解决字体图标@报错的问题
    cnpm install --save-dev file-loader extract-text-webpack-plugin
13：引入图片路径所需的依赖
    cnpm install --save-dev file-loader  url-loader html-withimg-loader
14:cnpm install mock whatwg-fetch fetch koa koa-body koa-router  --save-dev   后台所需的依赖项
    cnpm install koa-route  --save-dev  route跟router是两个东西；
    cnpm install --save-dev fs.promised path koa-static 






------------------------------------------------------
引入其他模块
cnpm install --save-dev react-redux redux
cnpm i react-addons-pure-render-mixin --save
cnpm install --save-dev redux-thunk thunk    connect需要babel的支持
cnpm i --save-dev html-loader babel-plugin-transform-decorators-legacy   再写入json



cnpm install webpack webpack-dev-server webpack-cli  react react-dom  --save-dev  babel-core babel-loader babel-preset-env babel-preset-react babel-plugin-react-transform react-transform-hmr less less-loader  css-loader style-loader react-router-dom --save-dev react-swipe  es6-promise --save-dev

cnpm install --save-dev react-redux redux react-addons-pure-render-mixin --save-dev




1：webpack的初始配置；
cnpm isntall webpack webpack-dev-server webpack-cli --save-dev
然后配置config，写入入口文件；
然后直接配置json，加入启动命令即可；server已经可以正常运行
2：加入loader，和插件；
jsxloader css/lessloader/图片loader/
jsxloader：cnpm insatll --save-dev babel-core babel-loader babel-preset-env babel-preset-react babel-preset-es2015
css/lessloader: cnpm insatll style-loader css-loader --save-dev
图片loader：cnpm insatll --save-dev url-loader html-withimg-loader
插件1：引入模板文件-在config引入和实例化
cnpm install html-webpack-plugin --save-dev
插件2：热更新：直接实例化 webpack.HotModuleReplacementPlugin
3：引入react以及各种模块
cnpm install react react-dom react-router-dom redux react-redux thunk --save-dev
---写入indexhtml和js，以及在config中配置devserver目录，即可打开端口和页面
4：引入react性能优化组件
cnpm install --save-dev react-addons-pure-render-mixin
集中命令：webpack+解码器+插件+react+express+axios+socket
cnpm --save-dev isntall webpack webpack-dev-server webpack-cli



<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
<div id="root"></div>
</body>
<script type="text/javascript" src="bundle.js"></script>
</html>


import React from 'react'
import ReactDom from 'react-dom'
import {render} from 'react-dom';
function Test(){
	return <h2>test</h2>
}

render(<Test/>, document.getElementById('root'));


module.exports = {
    entry:  __dirname + "/app/index.js",//已多次提及的唯一入口文件  '"
    output: {
        path: __dirname + "/build",//打包后的文件存放的地方
        filename: "bundle.js"//打包后输出文件的文件名
    },
    devServer: {
        contentBase: "./build",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "env", "react"
                        ]
                    }
                },
                exclude: /node_modules/
            }
        ]
    }
}






	"start": "webpack",
    "server": "webpack-dev-server "





























