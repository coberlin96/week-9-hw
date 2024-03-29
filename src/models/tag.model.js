const mongoose = require("mongoose")

const tagSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: false
        }
    },
    { timestamps: true }
)

module.exports = mongoose.model("tag", tagSchema)