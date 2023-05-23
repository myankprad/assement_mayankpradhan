import mongoose  from "mongoose"

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "title of post"]
    },
    body: {
        type: String,
        required: [true, "Content is empty"]
    }
})

export default mongoose.model("Post", PostSchema);