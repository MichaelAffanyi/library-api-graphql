const {v1: uuid} = require("uuid");
let {books, authors} = require("../data");
const {GraphQLError} = require("graphql/error");
const Book = require("../models/Book")
const Author = require("../models/Author")
const User = require("../models/User")
const {hashPassword, comparePassword, createToken} = require("../utils")


const mutations = {
    addBook: (root, args) => {
        const newBook = {...args, id: uuid()}
        books.push(newBook)
        const authorExist = authors.findIndex((author) => author.name === args.author)
        if (authorExist === -1) authors.push({name: args.author, id: uuid()})
        return newBook
    },
    editAuthor: (root, args) => {
        const {name, setBornTo} = args
        const author = authors.find(auth => auth.name === name)
        if (!author) {
            throw new GraphQLError(`No user with name ${name}`, {
                extensions: {
                    code: "NOT_FOUND_ERROR",
                    invalidArgs: name
                }
            })
        }
        const newAuth = {...author, born: setBornTo}
        authors = authors.map(author => author.name === name ? newAuth : author)
        return newAuth
    },
    register: async (root, args) => {
        const {username, password} = args
        const hashed = await hashPassword(password)
        const userObj = {username, password: hashed}
        return User.create(userObj)
    },
    login: async (root, args) => {
            const {username, password} = args
            const user = await User.findOne({username})
            if (!user) {
                throw new GraphQLError(`No user found with username: ${username}`, {
                    extensions: {
                        code: "BAD_USER_INPUT",
                        invalidArgs: username
                    }
                })
            }
            const isPasswordCorrect = await comparePassword(password, user.password)
            if(!isPasswordCorrect) {
                throw new GraphQLError("Invalid credentials", {
                    extensions: {
                        code: "INVALID_USER_INPUT"
                    }
                })
            }
            const tokenUser = {username, id: user._id}
            const token = await createToken(tokenUser)
            return {accessToken: token}
    }
}

module.exports = mutations