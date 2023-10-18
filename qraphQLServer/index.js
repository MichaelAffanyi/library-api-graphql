const {ApolloServer} = require("@apollo/server");
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers")
const {verifyToken} = require("../utils/createToken");

const server = new ApolloServer({
    resolvers,
    typeDefs
})

const context = async ({req, res}) => {
    // console.log(req.headers)
    const {authorization} = req.headers
    if (authorization && authorization.startsWith('Bearer')) {
        const token = authorization.split(" ")[1]
        return await verifyToken(token)
    }
}

module.exports = {server, context}