var express = require('express');
var app     = express();
var http    = require('http').Server(app);
var io      = require('socket.io')(http);
var path    = require('path');

app.use(express.static(path.join(__dirname,"public")));

var port = process.env.PORT || 3000;
http.listen(port, function(){
  console.log("server on!: http://localhost:3000/");
});




io.on('connection', function(socket){

socket.on('1', function(str){
   console.log(str);
 io.emit('1',str);
});

socket.on('2', function(str){
   console.log(str);
 io.emit('2',str);
});
socket.on('3', function(str){
   console.log(str);
 io.emit('3',str);
});
socket.on('4', function(str){
   console.log(str);
 io.emit('4',str);
});
socket.on('5', function(str){
   console.log(str);
 io.emit('5',str);
});
socket.on('6', function(str){
   console.log(str);
 io.emit('6',str);
});
socket.on('7', function(str){
   console.log(str);
 io.emit('7',str);
});
socket.on('8', function(str){
   console.log(str);
 io.emit('8',str);
});
socket.on('9', function(str){
   console.log(str);
 io.emit('9',str);
});
socket.on('10', function(str){
   console.log(str);
 io.emit('10',str);
});








socket.on('star', function(data){
   console.log('12345');
 io.emit('star','data');

  });


console.log('user connected: ', "drhong");

socket.on('disconnect', function(){
   console.log('user disconnected: ', "bye");
  });
 
});






