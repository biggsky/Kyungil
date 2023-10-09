const dot = require("dotenv").config();

const config = {
    dev : {
        username : process.env.DB_USERNAME,
        password : process.env.DB_PASSWORD,
        database : process.env.DB_NAME,
        host : process.env.DB_HOST,
        dialect : "mysql",
        timezone: "+09:00",
    }
}

module.exports = config;