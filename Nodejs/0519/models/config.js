const config = {
    dev : {
        username : process.env.USERNAMES,
        // username : "root",
        password : process.env.PASSWORD,
        database : process.env.DATABASE,
        host : process.env.HOST,
        // dialect 사용하는 데이터 베이스
        dialect : "mysql"
    }
}

module.exports = config;