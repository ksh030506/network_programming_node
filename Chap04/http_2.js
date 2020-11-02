var http = require('http');
var url = require('url');
var querystring = require('querystring');
const fs = require('fs');

var server = http.createServer(function(req, res){
    var parsedUrl = url.parse(req.url);     // url parsing

    var qs = querystring.parse(parsedUrl.query);  // querystring parsing
    console.log('qs ', qs);

    if(qs.num1 && qs.num2){
        var num1 = parseInt(qs.num1)
        var num2 = parseInt(qs.num2)
        var sum_1 = num1+num2
        console.log(sum_1)
        res.write('<h1>' + sum_1 + '</h1>')
        res.end();
    }

}).listen(8080, function(){
    console.log('8080 포트에서 대기중');
});