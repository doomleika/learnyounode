"use strict";

var concat = require('concat-stream');
var myconcat = concat(function(full_buffer){
    var reversed = full_buffer.toString().split('').reverse().join('');
    console.log(reversed);
});

process.stdin
    .pipe(myconcat);
