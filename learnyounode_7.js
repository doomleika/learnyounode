var http = require('http'); 
var target_url = process.argv[2];


http.get(target_url, callback_func);

function callback_func(response) {
    var all_string = '';
    var myCallback = function(data) {
        all_string = all_string.concat(data);
    };

    var myEndCallback = function(err, data) {
        console.log(all_string.length);
        console.log(all_string);
    };
    response.setEncoding('utf-8');

    response.on('data', myCallback);
    response.on('end', myEndCallback);
}
