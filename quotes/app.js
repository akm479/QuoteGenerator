var fs =  require("fs");
var express = require("express");

var bodyparser = require("body-parser");
var urlencodedparser = bodyparser.urlencoded({extended:false});
var app = express();


app.use(express.static("views"))
app.set("view engine","ejs");
app.set("views",__dirname+"/views");

var rawdata  = fs.readFileSync('quotes.json');
var quotes = JSON.parse(rawdata);



app.get("/",function(req,res){

    const randIndex = Math.floor(Math.random() * quotes.length)

    res.render("result",{quote:quotes[randIndex]});

});

app.listen(3000,function(){
    console.log("server is running");
});




