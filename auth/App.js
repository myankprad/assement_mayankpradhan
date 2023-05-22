var express = require("express");
var app = express();
const jwt = require("jsonwebtoken")

const PORT = 3000;

app.get("/", function (req, res) {
  res.send("Hola como Estas ?");
});



app.listen(PORT, function () {
  console.log("Working");
});


module.exports = (req, res, next) =>{
    try {
        const token = req.headers.authorization("")[1];
        const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET")
        const userId = decodedToken.userId;
        if(req.body.userId && req.body.userId !== userId){
            throw "Invalid user Id";
        }
        else{
            next()
        }
    } catch (error) {
        res.status(401).json({
            error: new Error ("Invalid request")
        })
    }
}