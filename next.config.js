require('dotenv').config()
const { env } = require("process")

module.exports = {
  env: {
    API_URL: process.env.API_URL
  }
}