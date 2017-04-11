"use strict";

var ws = require('websocket-stream');

var target = 'ws://localhost:8099';

var stream = ws(target);

stream.write('hello\n');

