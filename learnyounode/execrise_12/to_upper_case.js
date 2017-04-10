"use strict";

var through = require('through2');

var to_upper_case_stream = through(write, end);

function write(buffer, encoding, next) {
    this.push(buffer.toString().toUpperCase());
    next();
}

function end(done) {
    done();
}

module.exports = to_upper_case_stream;
