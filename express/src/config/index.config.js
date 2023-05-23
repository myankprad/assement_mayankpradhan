import dotenv from "dotenv"

dotenv.config();

const config = {
    
    MONGODB_URL: process.env.MONGODB_URL || "mongodb+srv://mayankpradhan115:mayankpradhan115@cluster0.bxv7ws4.mongodb.net/blog?retryWrites=true&w=majority",
    JWT_SECRET_KEY: process.env.JWT_SECRET || "mink",
    JWT_EXPIRY: process.env.JWT_EXPIRY || "2d",
}

export default config;