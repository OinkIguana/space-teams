const Koa = require('koa');
const serve = require('koa-static');

const app = new Koa();
const server = require('http').createServer(app.callback());
const io = require('socket.io')(server);

app.use(serve('../client/public_html'));

io.on('connection', socket => {
  console.log('a user connected');
});

server.listen(3000);
