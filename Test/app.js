const express = require('express');
const app = express();
const fs = require('fs');


app.get('/', function(req, res){
    var num1 = parseInt(req.query.num1);
    var num2 = parseInt(req.query.num2);
    var operator = req.query.operator;

    if(num1 && num2 && operator){
        if(operator == 'add'){
            res.send(`
            <h1>GET 요청 처리 결과: ${calculate(num1, num2, operator)}</h1>
            <h1><a href="/">Home</a></h1>
        `);
        } else if(operator == 'subtract'){
            res.send(`
            <h1>GET 요청 처리 결과: ${calculate(num1, num2, operator)}</h1>
            <h1><a href="/">Home</a></h1>
        `);
        } else if(operator == 'multiply'){
            res.send(`
            <h1>GET 요청 처리 결과: ${calculate(num1, num2, operator)}</h1>
            <h1><a href="/">Home</a></h1>
        `);
        } else if(operator == 'divide') {
            res.send(`
            <h1>GET 요청 처리 결과: ${calculate(num1, num2, operator)}</h1>
            <h1><a href="/">Home</a></h1>
        `);
        }
    } else {
        fs.readFile('./index.html', function(err, data){
            if(err){
                console.log(err);
            } else {
                res.end(data);
            }
        });
    }

    function calculate(num1, num2, operator){
        var sum = 0;
        if(operator == 'add') {
            sum = num1 + num2;
        } else if(operator == 'subtract') {
            sum = num1 - num2;
        } else if(operator == 'multiply') {
            sum = num1 * num2;
        } else if(operator == 'divide') {
            sum = num1 / num2;
        }
        return sum;
    }
});

app.listen(8080, () => {
  console.log(`App is listening on port ${8000}!`);
});