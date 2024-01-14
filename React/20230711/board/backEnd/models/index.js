const Sequelize = require("sequelize");
const config = require("./config");

const {User} = require("./users");
const { Board } = require("./board");

const sequelize = new Sequelize(
    config.dev.database,
    config.dev.username,
    config.dev.password,
    config.dev
)

const db = {}
db.sequelize = sequelize;

db.User = User;
db.Board = Board;

User.init(sequelize);
Board.init(sequelize);

module.exports = db;