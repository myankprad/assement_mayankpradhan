const router = require("express").Router()

const User = require("../models/User")
const bcrypt = require("bcrypt")

// Register

router.post("./register", async(req, res)=>{
    try {

        const salt =  await bcrypt.genSalt(10)
        const hashPass = await bcrypt.hash(req.body.password, salt)

        const newUser = new User ({
            username: req.body.username,
            email: req.body.email,
            password: hashPass,
        })
        const user = await newUser.save()
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err)
    }
})


router.post("/login", async(req, res)=>{
    try {
        const user = User.findOne({username: req.body.username})
        !user && res.status(400).json("wrong input")

        const validate = await bcrypt.compare(req.body.password, user.password)
        !validate && res.status(400).json("wrong input")

        const {password, ...others} = user._doc;
        

    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router