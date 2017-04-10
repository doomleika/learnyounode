"use strict";
var http = require('http');

var items = process.argv.slice(2);
var buffers = [];

// Initialize buffers
(function(input_array) {
    for(var i = 0; i < items.length; ++i) {
        input_array[i] = '';
    }
})(buffers);

function get_all_end_func() {
    var count = 0;
    function all_end(err, data) {
        count = count + 1;
        if(3 === count) {
            for(var i = 0; i < items.length; ++i) {
                console.log(buffers[i]);
            }
        }
    }
    return all_end;
}

var end_func = get_all_end_func();

function get_each_url_str(index) {
    function my_response(data) {
        buffers[index] = buffers[index] + data.toString();
    }
    return my_response;
}

for(var i = 0; i < items.length; ++i) {
    (function(i) {
        http.get(items[i], function(response) {
            response.setEncoding('utf-8');
            response.on('data', get_each_url_str(i));
            response.on('end', end_func);
        });
    })(i);
}

