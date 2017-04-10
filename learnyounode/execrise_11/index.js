"use strict";

var http = require('http');
var fs = require('fs');

var port = process.argv[2];
var file_location = process.argv[3];

var server = http.createServer(my_http_callback);
server.listen(port);

function my_http_callback(request, response) {
   fs.createReadStream(file_location).pipe(response);
}
