"use strict";

var split = require('split');
var through = require('through2');

var write = (function () {
    var count = 0;
    function write(buffer, _, next) { 
        if(count % 2 == 0) {
            this.push(buffer.toString().toLowerCase())
        }
        else {
            this.push(buffer.toString().toUpperCase())
        }
        this.push('\n');
        count = count + 1;
        next();
    } 
    return write;
})();

var my_transform = through(write);

process.stdin
    .pipe(split())
    .pipe(my_transform)
    .pipe(process.stdout);

