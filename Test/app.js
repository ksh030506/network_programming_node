var http = require('http');
var fs = require('fs');
var querystring = require('querystring');
var url = require('url');

var server = http.createServer(function(req, res){

        var parsedUrl = url.parse(req.url);
        var parsedQuery = querystring.parse(parsedUrl.query, '&', '=');

        let num1 = parseInt(parsedQuery.num1);
        let num2 = parseInt(parsedQuery.num2);
        let operator = parsedQuery.operator;

        if(num1 && num2 && operator) {
        res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
        res.end(`
        <h1>계산 결과는 ${calculate(num1, num2, operator)}</h1>
        <a href='/'>Home</a>`);
    } else {
        if(req.url === '/'){
            fs.readFile('./index.html', (err, data) => {
                res.end(data);
            });
        }
    }
}).listen(8080, function(){
    console.log('8080번 포트에서 대기중');
});

function calculate(num1, num2, operator){
    let sum = 0;

    if(operator == 'add'){
        sum = num1 + num2;
    }
    else if(operator == 'subtract') {
        sum = num1 - num2;
    } 
    else if(operator == 'multiply') {
        sum = num1 * num2;
    }
    else if(operator == 'divide') {
        sum = num1 / num2;
    }

    return sum;
}