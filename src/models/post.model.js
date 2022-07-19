const mongoose = require("mongoose")

const postSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            required: true
        },
        userId: {
            type: String,
            required: true
        }        
    },
    { timestamps: true }
)

module.exports = mongoose.model("post", postSchema)