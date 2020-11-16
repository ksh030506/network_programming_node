const { request } = require("express");

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    let num1 = req.query.num1;
    console.log(num1);
});

app.listen(3000, ()=> {
    console.log("3000");
});