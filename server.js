require("dotenv").config()
const {startStandaloneServer} = require("@apollo/server/standalone")
const connectDB = require("./db/connectDB")
const {server, context} = require("./qraphQLServer")

const start = async () => {
    try {
        await connectDB()
        startStandaloneServer(
            server,
            {listen: {port: 3000},
            context
            },
        ).then(({url}) => console.log(`Sever started at ${url}`))
    } catch (e) {
        console.log("Can't start server now")
    }
}

start()