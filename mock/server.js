// var app = require('koa')();
const Koa = require('koa');
const app = new Koa();
const route=require('koa-route')
var koaBody = require('koa-body')
const koaBody2=require('koa-bodyparser')

app.use(koaBody2());
const ad=require('./home/ad.js')
const list=require('./home/list.js')

const main = ctx => {
  ctx.response.body = ad
};
const test = ctx => {
  ctx.response.body = list
};
const result = ctx => {
	// console.log(ctx)
	//console.log(ctx.request.body)
	const {a,b}=ctx.request.body
	//console.log(a,b)
	let list2=list.data.filter(function(item,index){
		if(item.pro===a){
			return true
		}
	})
	let list3={}
	for(e=0;e<list2.length;e++){
		list3[e]=list2[e]
	}

	//console.log(list3)
  ctx.response.body = list3
};
const resultinfo = ctx => {
	let list2=list.data.filter(function(item,index){
		if(item.id==='0001'){
			return true
		}
	})
	let list4={}
	list.data.map(function(item,index){
		if(item.id==='0001'){
			list4=list.data[index]
		}
	})
	console.log(42,ctx.request.body)
	console.log(43,list2)
	const {a}=ctx.request.body
	console.log(a)
  	ctx.response.body = list4
};
let msg=ctx=>{
	const list=require('./home/say0001.js')
	ctx.response.body=list
}
app.use(route.get('/api/1', main));
app.use(route.get('/api/2', test));
app.use(route.post('/api/result',result));//koaBody(),
app.use(route.post('/api/getgoodsinfo',resultinfo))

app.use(route.post('/api/say',msg))
app.listen(3000,function(){
	console.log('连接后台端口')
});
