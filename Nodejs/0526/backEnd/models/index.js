const Sequelize = require("sequelize");

// 폴더 까지 경로 index.js 파일 찾아서 index.js 파일에서 내보낸 객체
const config = require("../config");
const {User, Board} = require("./users");

const sequelize = new Sequelize(
    config.dev.database,
    config.dev.username,
    config.dev.password,
    config.dev
)

const db = {};

db.sequelize = sequelize;
db.User = User;
db.Board = Board;

// 테이블 초기화
User.init(sequelize);
Board.init(sequelize);
User.associate(db);
Board.associate(db);

module.exports = db;


