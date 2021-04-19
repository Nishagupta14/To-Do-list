const express = require("express");
const bodyparser = require("body-parser");

const app = express();

var items=[];

app.set('view engine','ejs');
app.use(bodyparser.urlencoded({extended: true}));
app.get("/",function(req,res){

var today=new Date();
var options={
    weekday :"long",
    day:"numeric",
    month:"long"
};
var day =today.toLocaleDateString("en-US",options);
//var day =today.toLocaleDateString("en-US");
//var day =today.toLocaleDateString("en-US");

    
res.render("list",{kindofday: day,newListItems:items});


});
app.post("/",function(req,res){
   var item =req.body.newItem;
    items.push(item);
    res.redirect("/");
});
app.listen(3000,function(){
    console.log("Server started on port 3000");
    });