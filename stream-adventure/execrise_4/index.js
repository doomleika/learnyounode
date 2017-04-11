"use strict";
var through = require('through2');

var my = {
    'write': function (buffer, encoding, next) {
                 this.push(buffer.toString().toUpperCase());
    		 next();
             },
    'end': function(done) { done(); }
};
var transform_stream = through(my['write'], my['end']);

process.stdin.pipe(transform_stream).pipe(process.stdout);

