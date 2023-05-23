var express = require("express");
var app = express();

const PORT = 5000;

app.get("/", function (req, res) {
    res.send("Hola como Estas ?");
  });


app.listen(PORT, function () {
    console.log("Working");
  });
  
  (async ()=>{
    try{
        await mongoose.connect();
        console.log("connect to DB");

        app.listen(5000, ()=>{
            console.log("Listening on the port");
        })
    }catch(err){
        throw err;
    }
})()