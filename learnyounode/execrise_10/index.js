"use strict";
var net = require('net');
var strftime = require('strftime');

var port = process.argv[2];

var server = net.createServer(my_socket_function);

server.listen(port);

function my_socket_function(socket) {
    socket.end(strftime('%Y-%m-%d %H:%M') + '\n');
}
