const mongoose = require('mongoose');
const cors = require('cors');
var express = require("express");
const data = require('./data2.json');
const app = express();
app.listen(8080,()=>console.log('hey i am listening...'))
app.use(cors());
app.get('/',(req,res)=>{
    res.send(data);
})
