"use strict";

var strftime = require('strftime');
var http = require('http');
var url = require('url');

var port = process.argv[2];
var server = http.createServer(my_server_func);
server.listen(port);

function my_server_func(request, response) {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    var parsed_url = url.parse(request.url, true);
    var iso = parsed_url.query.iso;
    var date = new Date(iso);

    if(parsed_url.pathname === '/api/parsetime') {
        var return_dict = {
            'hour': date.getHours(),
            'minute': date.getMinutes(),
            'second': date.getSeconds()
        };
        response.end(JSON.stringify(return_dict));
    }
    else if (parsed_url.pathname === '/api/unixtime') {
        var return_dict = {
            'unixtime': date.getTime()
        }
        response.end(JSON.stringify(return_dict));
    }
    else {
        throw Error('wrong path');
    }
}


