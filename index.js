var io = require('socket.io').listen(8000);
io.sockets.on('connection',function(socket){
  socket.emit('connectionChk',{
    open: "Server Opened."
  });
  socket.on('prsList',Function(data){
    console.log(data);
  });
})
