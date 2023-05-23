import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";
import config from "../config/index.config.js";


const userSchema = mongoose.Schema({
    name: {
        type: String,
        required:[true, "name"],
        maxLength:[50, " 50 characters"]
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required:[true, "password"],
        minLength: [8, " 8 characters"],
        select: false
    },
    age:{
        type: Number
    }
},{timestamps:true});


userSchema.pre("save", async function(next){
    if(!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 8);

    next();
});


userSchema.methods = {
    
    comparePassword: async function(enteredPassword){
        return await bcrypt.compare(enteredPassword,this.password)
    },

    getJWTtoken: async function(){
        return await JWT.sign({_id: this._id}, config.JWT_SECRET_KEY, {
            expiresIn: config.JWT_EXPIRY
        })
    }
}

export default mongoose.model("User", userSchema);