const jwt = require("jsonwebtoken")
const createToken = async (user) => {
    return await jwt.sign(user, process.env.JWT_SECRET)
}

const verifyToken = async (token) => {
    return jwt.verify(token, process.env.JWT_SECRET);
}

module.exports = {createToken, verifyToken}