const {Schema, model} = require("mongoose")

const BookSchema = new Schema({
    title: {
        type: String,
        required: true,
        minLength: 5
    },
    published: {
        type: Number,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    genres: {
        type: [String],
        required: true
    }
})

const BookModel = model('Book', BookSchema)
module.exports = BookModel