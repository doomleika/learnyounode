"use strict";

var through = require('through2');
var http = require('http');

var port = process.argv[2];

var to_upper_case = through(to_upper_write);
function to_upper_write(buffer, _, next) {
    this.push(buffer.toString().toUpperCase());
    next();
}

function my_server_function(req, res) {
    if(req.method === 'POST') {
        req.pipe(to_upper_case).pipe(res);
    }
}

var server = http.createServer(my_server_function);

server.listen(port);

