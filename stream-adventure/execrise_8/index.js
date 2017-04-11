"use strict";
var request = require('request');

var target_url = 'http://localhost:8099';
var r = request.post(target_url);

process.stdin.pipe(r).pipe(process.stdout);

