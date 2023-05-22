var express = require("express");
var app = express();
const PORT = 3000;
import User from "./model/user";
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

app.get("/", function (req, res) {
  res.send("Hola como Estas ?");
});

app.use(express.json());
app.use(cookieParser());

app.listen(PORT, function () {
  console.log("Working");
});

app.post("/register", async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body;

    if (!(firstname && lastname && email && password)) {
      res.status(400).send("All field required");
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(401).send("User Already Exist");
    }

    const myEncPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      firstname,
      lastname,
      email,
      password: myEncPassword,
    });

    jwt.sign(
      { id: user._id, email: email },
      "mink", //my secret key
      {
        expiresIn: "2h",
      }
    );

    user.token = token;
    user.password = undefined;

    res.status(201).json(user);
  } catch (error) {
    console.log(error);
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!(email && password)) {
      res.status(400).send("Please send email and password");
    }

    const user = await User.findOne({ email });
    if (email != user) {
      res.status(400).send("user already exist");
    }

    // await bcrypt.compare(password, user.password)

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        { id: user._id },
        "mink", //my secret key
        {
          expiresIn: "2h",
        }
      );

      user.token = token;
      user.password = undefined;

      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 1000),
        httpOnly: true,
      };
      res.status(200).cookie("token", token, options).json({
        success: true,
        token,
        user,
      });

      res.status(201).json(user);
    }
  } catch (error) {
    console.log(user);
  }
});


app.get("/home", (req, res)=>{
    // grab token from cookie 

    console.log(req.cookies)

    const {token} = req.cookies

    if(!token){
        res.status(403).send("Please Login first")
    }

   try {
    const decode = jwt.verify(token, "mink")
    console.log(decode)
   } catch (error) {
    res.status(401).send("invalid token")
   }


    res.send("Welcome")
})