// Modules
var express = require("express");
var mongoose = require("mongoose");
var bodyparser = require("body-parser");
var cors = require("cors");

// core modules
var path = require("path");

/*................................*/
var app = express();

app.use(cors());
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res)=>{
    res.send("its working");
})

app.listen(3000, ()=>{
    console.log("server started test");
})

