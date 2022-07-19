const { default: mongoose } = require('mongoose');


const userSchema = new mongoose.Schema(
    {
        username: {
            type:String,
            unique: true,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            match: [
                "/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/",
                "Please Enter a valid email"
            ]
        },
        handle: {
            type: String,
            required: true,
            unique: true
        }
    },
    { timestamps: true }
)

module.exports = mongoose.model("user", userSchema)