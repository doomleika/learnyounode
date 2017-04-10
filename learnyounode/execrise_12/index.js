"use strict";

var http = require('http');
var to_upper_case_stream = require('./to_upper_case.js');

var port = process.argv[2];
var server = http.createServer(my_server_func);
server.listen(port);

function my_server_func(request, response) {
   request.pipe(to_upper_case_stream).pipe(response);
}

