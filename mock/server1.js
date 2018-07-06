// var app = require('koa')();
const Koa = require('koa');
const app = new Koa();
const Router=require('koa-router')
var router =new Router();
var koaBody = require('koa-body')

router.get('/', function *(next) {
    this.body = 'hello koa !'
});

router.get('/api', function *(next) {
    this.body = 'test data'
});

router.get('/api/1', function *(next) {
    this.body = 'test data 1'
});

router.get('/api/2', function *(next) {
    this.body = {
    	a:1,
    	b:'123'
    }
});

// 首页 —— 广告（超值特惠）
// var homeAdData = require('./home/ad.js')
// router.get('/api/homead', function *(next) {
//     this.body = homeAdData
// });

// // 首页 —— 推荐列表（猜你喜欢）
// var homeListData = require('./home/list.js')
// router.get('/api/homelist/:city/:page', function *(next) {
//     // 参数
//     const params = this.params
//     const paramsCity = params.city
//     const paramsPage = params.page

//     console.log('当前城市：' + paramsCity)
//     console.log('当前页数：' + paramsPage)

//     this.body = homeListData
// });



// 开始服务并生成路由
app.use(router.routes())
   .use(router.allowedMethods());
app.listen(3000,function(){
	console.log('连接后台端口')
});
