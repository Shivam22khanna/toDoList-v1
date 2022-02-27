const express = require("express");
const bodyParser = require("body-parser");
const res = require("express/lib/response");

// this is for connecting the module which we created..
const date =  require(__dirname + "/date.js");

// const request = require("request");
// const https = require("https");

const app = express();



let items = ["Exercise","work", "Hangout"];

let workItems = [];


// this is from ejs 
app.set('view engine', 'ejs');

// to use css and other things we use 
app.use(express.static("public"));


// body parser
app.use(bodyParser.urlencoded({extended:true}));



app.get("/", function(req,res){

    let day = new Date();
  
    // let toDay = new Date();
    

    // let options = {
    //     weekday: "long",
    //     day : "numeric",
    //     month : "long",

    // };

    // let day = toDay.toLocaleDateString("en-US",options);

    
    res.render("list", {listTitle: day , newListItem:items});

   

});




app.post("/",function(req,res){

    let item = req.body.newItem;

    if(req.body.list === "Work"){
        workItems.push(item);
        res.redirect("/work");

    } else {
            items.push(item);
            res.redirect("/");

      }
    
    
    
});


app.get("/work", function(req,res){
    res.render("list",{listTitle:"Work List",newListItem: workItems});
});

app.post("/work",function(req,res){
    let workItem = req.body.newItem;
    workItems.push(workItem);

    res.redirect("/");

});

app.get("/about",function(req,res){
    res.render("about");
});


app.listen(3000,function(){
    console.log("server started at on port 3000");
});