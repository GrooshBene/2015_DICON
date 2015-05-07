var express = require('express');
var app = express();
var server = require('http').Server(app);
server.listen(80);
var io = require('socket.io')(server);
console.log('Server Running At 80');
io.sockets.on('connection',function(socket){
  socket.emit('connectionChk',{
    open: "Server Opened."
  });
  socket.on('prsList',function(data){
    console.log(data);
  });
});
app.get("/", function(req,res){
	res.sendfile("index.html");
});
