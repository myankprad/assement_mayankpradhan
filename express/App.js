var express = require("express");
var app = express();

const PORT = 3000;

app.get("/", function (req, res) {
    res.send("Hola como Estas ?");
  });

app.get("/login", (req, res)=>{
    res.send("Hello user")
}) 

app.get("/hog", (req, res)=>{
    res.send("<h1>Hogwards Express</h1>")
})

app.get("/signin", function(req, res){
    res.send("Hello user please sign in")
}) 
  
app.get("/home", function(req, res){
    res.send("Welcome to Home tab")
}) 
  
app.get("/about", function(req, res){
    res.send("Welcome to about me")
})

app.get("/id", function(req, res){
    res.send("id")
})

app.get("/container", function(req, res){
    res.send("container please fill me")
})

app.get("/morning", function(req, res){
    res.send("Good morning user")
})
  
app.get("/afternoon", function(req, res){
    res.send("good afterout user")
})

app.get("/evening", function(req, res){
    res.send("good evening user")
})

app.get("/greeting", function(req, res){
    res.send("Namaste user")
})

app.get("/night", function(req, res){
    res.send("good Night user")
})

app.get("/css", function(req, res){
    res.send("Hey user please add some colors in me")
})

app.get("/js", function(req, res){
    res.send("add some magic")
})

app.get("/express", function(req, res){
    res.send("Hey i am a express app")
})

app.get("/react", function(req, res){
    res.send("crerate react app")
})

app.get("/code", function(req, res){
    res.send("Hey Developer")
})

app.get("/ineuron", function(req, res){
    res.send("Best EdTech ever")
})

app.get("/pw", function(req, res){
    res.send("physics wallah")
})

app.get("/html", function(req, res){
    res.send("chapter 1")
})


app.listen(PORT, function () {
    console.log("Working");
  });
  