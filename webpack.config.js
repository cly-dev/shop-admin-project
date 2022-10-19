module.exports = require('dotenv').config({
  path: path.resolve(__dirname, './env/.env' + process.env.NODE_DEV),
})
