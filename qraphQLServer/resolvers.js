let {books, authors} = require("../data");
const Mutation = require("./mutations")
const Query = require("./queries")


const resolvers = {
    Query,
    Mutation,
    Author: {
        bookCount: (root) => books.filter(book => book.author === root.name).length
    }
}

module.exports = resolvers