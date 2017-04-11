"use strict";
var fs = require('fs');

var filepath = process.argv[2];

fs.createReadStream(filepath).pipe(process.stdout);

