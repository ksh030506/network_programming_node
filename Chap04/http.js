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

// var server = http.createServer(function(req, res){
//     console.log('req.headers ', req.headers);
//     console.log('req.method ', req.method);
//     console.log('req.url ', req.url);

//     res.statusCode = 200;
//     res.statusMessage = 'OKOK';
//     res.setHeader('Content-Type', 'text/html;charset=utf-8');
//     res.writeHead(200, 'Okay',{'Content-Type':'text/html;charset=utf-8',
//     'myName':'kimsanghyeon'});




//     res.end('<h1> 안녕하세요 반갑습니다. </h1>');
// }).listen(8080, ()=> console.log("8080 포트로 실행함"));

//#endregion

//#region 

var server = http.createServer(function(req, res){ 
    res.end(`<!DOCTYPE html>
    <html>
      <head>
        <title>제목</title>
        <meta charset="utf-8" />
      </head>
      <body>
        <h1>Hello</h1>
        <div>
          <p>Welcome to HTML world! 저와 함께 html을 배워봅시다.</p>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRfxSBeI1_dVUmNt6DjCb0LOmEB-W_aZkmLQg&usqp=CAU"
          />
        </div>
      </body>
    </html>
    `);
}).listen(8080, ()=> console.log("8080 포트로 실행함"));

//#endregion