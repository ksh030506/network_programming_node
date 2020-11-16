const http = require('http');
const quertString = require('querystring');
const fs = require('fs');
const url = require('url');

var server = http.createServer(function(req, res){
    var parseURL = url.parse(req.url);
    var parseQuery = quertString.parse(parseURL.query, '&', '=');
    
    let num1 = parseInt(parseQuery.num1);
    let num2 = parseInt(parseQuery.num2);
    let operator = parseQuery.operator;

    if(num1 && num2 && operator){
        res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
        res.end(`<h1>계산 결과는 ${cal(num1, num2, operator)}</h1>
        <a href="/">Home</a>`)
    }
    else {
        if(req.url = '/'){
            fs.readFile('./index.html', function(err, data){
                res.write(data);
                res.end(`<a href="/">Home</a>`);
            });
        }
    }

}).listen(8080, function(req, res){
    console.log("8080포트에서 열림");
});

function cal(num1, num2, operator){

    let re = 0;

    if(operator == 'add'){
        re = num1 + num2;
    }
    else if(operator == 'subtract'){
        re = num1 - num2;
    }
    else if(operator == 'multiply'){
        re = num1 * num2;
    }
    else if(operator == 'divide'){
        re = num1 / num2;
    }

    return re
}