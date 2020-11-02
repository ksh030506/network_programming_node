var http = require('http');
var url = require('url');
var querystring = require('querystring');
const fs = require('fs');

var server = http.createServer(function(req, res){
    fs.readFile('./sum.html', (err, data) => {
        if(err){
            console.log(err);
            return;
        }
        else {
            res.end(data);
        }
    });
    // body에서 데이터를 추출하여 저장
    if(req.method.toLowerCase() === 'post'){
        sum_num(req, res);
    }
}).listen(8080, function(){
    console.log('8080 포트에서 대기중');
});

function sum_num(req, res) {
    var body = '';
    req.on('data', function(chunk){
        body += chunk;
        console.log('body: ', body) // title=조승우&actor=비밀의 숲
    });
    req.on('end', function(){
        var qs = querystring.parse(body);
        console.log('qs: ', qs)     //{ title: '조승우', actor: '비밀의 숲' }
        console.log(qs.num1+qs.num2)
        var num1 = parseInt(qs.num1)
        var num2 = parseInt(qs.num2)
        console.log(num1+num2)
        res.writeHead(302, {'Location': 'http://localhost:8080'});
        res.end();
    });
}