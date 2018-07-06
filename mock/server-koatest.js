const Koa = require('koa');
const app = new Koa();
const route = require('koa-route');
// const main = ctx => {
//   ctx.response.body = 'Hello World22222';
// };
// const main = ctx => {
//   if (ctx.request.accepts('xml')) {
//     ctx.response.type = 'xml';
//     ctx.response.body = '<data>Hello World</data>';
//   } else if (ctx.request.accepts('json')) {
//     ctx.response.type = 'json';
//     ctx.response.body = { data: 'Hello World' };
//   } else if (ctx.request.accepts('html')) {
//     ctx.response.type = 'html';
//     ctx.response.body = '<p>Hello World</p>';
//   } else {
//     ctx.response.type = 'text';
//     ctx.response.body = 'Hello World';
//   }
// };
// const main = ctx => {
//   if (ctx.request.path !== '/') {
//     ctx.response.type = 'html';
//     ctx.response.body = '<a href="/">Index Page</a>';
//   } else {
//     ctx.response.body = 'Hello World222';
//   }
// };
// app.use(main);

// const about = ctx => {
//   ctx.response.type = 'html';
//   ctx.response.body = '<a href="/">Index Page123</a>';
// };
// const main = ctx => {
//   ctx.response.body = 'Hello World456';
// };
// app.use(route.get('/', main));
// app.use(route.get('/about', about));

// const path = require('path');
// const serve = require('koa-static');
// const main = serve(path.join(__dirname));
// app.use(main);//这个可以显示当前目录里面的文件里的所有内容，js可以，html也可以

// const redirect = ctx => {
//   ctx.response.redirect('/');
//   ctx.response.body = '<a href="/">Index Page</a>';
// };
// app.use(route.get('/redirect', redirect));

// const main = ctx => {
//   console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`);
//   ctx.response.body = 'Hello World';
// };
// app.use(main)

// const logger = (ctx, next) => {
//   console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`);
//   next();
// }
// const main = ctx => {
//   ctx.response.body = 'Hello World';
// };
// app.use(logger);
// app.use(main);

// const one = (ctx, next) => {
//   console.log('>> one');
//   next();
//   console.log('<< one');
// }
// const two = (ctx, next) => {
//   console.log('>> two');
//   next(); 
//   console.log('<< two');
// }
// const three = (ctx, next) => {
//   console.log('>> three');
//   next();
//   console.log('<< three');
// }
// app.use(one);
// app.use(two);
// app.use(three);

const fs = require('fs.promised');
// const Koa = require('koa');
// const app = new Koa();

const main = async function (ctx, next) {
  ctx.response.type = 'html';
  ctx.response.body = await fs.readFile('./index.html', 'utf8');
};
app.use(main);


app.listen(3000);












