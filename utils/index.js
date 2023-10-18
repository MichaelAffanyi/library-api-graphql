const {hashPassword, comparePassword} = require("./hashPassword")
const {createToken} = require("./createToken")

module.exports = {
    hashPassword,
    comparePassword,
    createToken
}