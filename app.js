var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server);

server.listen(3000);

app.get('/', function(req, res){
	res.sendfile(__dirname + '/index.html');
});

io.socket.on('connection', function(socket){
	socket.on('send message', function(data){
		io.socket.emit('new message', data);
		socket.broadcast.emit('new message', data);

	});
     
});