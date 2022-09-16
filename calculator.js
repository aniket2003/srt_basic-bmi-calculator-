const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req,res){

    let n1 = req.body.num1;
let n2 = req.body.num2;
let n3 = Number(n2) + Number(n1);

  res.send("Answer : " + n3);

});




app.listen(3000,function(){
    console.log("server is running on port 3000");
});