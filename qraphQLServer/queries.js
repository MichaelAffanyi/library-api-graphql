const Book = require("../models/Book");
const Author = require("../models/Author");
const {authors} = require("../data");

const queries = {
    bookCount: async () => Book.countDocuments(),
    authorCount: async () => Author.countDocuments(),
    allBooks: async (root, args) => {
        const query = {}
        if (args.author) {
            query.author = args.author
        }
        if (args.genre) {
            query.genres = {$in: args.genre}
        }
        return Book.find(query)
    },
    allAuthors: () => authors,
    showMe: async (root, args, context) => {
        // console.log(context)
        return {username: context.username, id: context.id}
    }
}

module.exports = queries