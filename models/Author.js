const {Schema, model} = require("mongoose")

const AuthorSchema = new Schema({
    name: {
        type: String,
        required: true,
        minLength: 2
    },
    born: {
        type: Number,
        required: true,
    }
})

module.exports = model('Author', AuthorSchema)