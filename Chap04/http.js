var http = require('http');

//#region 1. http 서버 구동

// var server = http.createServer();

// //클라이언트의 요청이 있으면 발생
// server.on('request', function(req, res) {
//     res.write('<h1> welcom');
//     res.end('to my server');
// });

// server.on('listening', () => console.log("8080 포트에서 실행함"));

// server.listen(8080)


//#endregion


//#region 2. http 서버 구동 축약

// var server = http.createServer(function(req, res){
//     res.write('<h1> welcom');
//     res.end('to my server');
// }).listen(8080, ()=> console.log("8080 포트로 실행함"));




//#endregion

//#region 3. request, response 메시지

var server = http.createServer(function(req, res){
    console.log('req.headers ', req.headers);
    console.log('req.method ', req.method);
    console.log('req.url ', req.url);
    





    res.end('<h1> welcom to my server </h1>');
}).listen(8080, ()=> console.log("8080 포트로 실행함"));

//#endregion