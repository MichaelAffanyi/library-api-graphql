const {Schema, model} = require("mongoose")

const UserSchema = new Schema({
    username: {
        type: String,
        require: true,
        minLength: 5
    },
    password: {
        type: String,
        required: true,
        minLength: 8
    }
})

module.exports = model("User", UserSchema)