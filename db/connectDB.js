const {connect} = require("mongoose")

const url = process.env.MONGO_URI.replace("<password>", process.env.MONGO_PASSWORD)
const connectDB = async () => {
    try{
        await connect(url)
        console.log("Database connected successfully")
    } catch (e) {
        console.log(`Can't connect to database now; Error: ${e}`)
        process.exit(1)
    }
}

module.exports = connectDB