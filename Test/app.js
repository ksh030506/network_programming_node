const express = require('express');
const fs = require('fs');
const { request } = require('http');
const app = express();
const PORT = 8080;

app.get('/', (req,res) => {
    fs.readFile('./index.html', (err, data) => {
        if(err){
            console.log(err);
            return;
        }
        else {
            res.end(data);
        }
    });
    if(req.query.operator == 'add') {
        console.log('덧셈');
    }
});

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}!`);
});