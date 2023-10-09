const Sequelize = require("sequelize");
const config = require("./config");
const bcrypt = require("bcrypt");

const { User } = require("./Users");
const { Board } = require("./Board");
const { Comment } = require("./Comment");
const { LikeBoard } = require("./LikeBoard");
const { Attraction } = require("./Attraction");
const { LikeComment } = require("./LikeComment");
const { LikeRecomment } = require("./LikeRecomment");
const { Recomment } = require("./Recomment");
const { Plan } = require("./Plan");
const { Notice } = require("./Notice");
const sequelize = new Sequelize(
  config.dev.database,
  config.dev.username,
  config.dev.password,
  config.dev
);

const db = {};
db.sequelize = sequelize;

db.User = User;
db.Board = Board;
db.Comment = Comment;
db.LikeBoard = LikeBoard;
db.Attraction = Attraction;
db.LikeComment = LikeComment;
db.LikeRecomment = LikeRecomment;
db.Recomment = Recomment;
db.Plan = Plan;
db.Notice = Notice;
User.init(sequelize);
Board.init(sequelize);
Comment.init(sequelize);
LikeBoard.init(sequelize);
Attraction.init(sequelize);
LikeComment.init(sequelize);
LikeRecomment.init(sequelize);
Recomment.init(sequelize);
Plan.init(sequelize);
Notice.init(sequelize);

User.associate(db);
Board.associate(db);
Comment.associate(db);
LikeBoard.associate(db);
Attraction.associate(db);
LikeComment.associate(db);
LikeRecomment.associate(db);
Recomment.associate(db);
Plan.associate(db);

const createAdminUser = async () => {
  const user = await User.findOne({ where: { user_id: "admin1234" } });
  if (user) {
    
  } else {
    bcrypt.hash("aaaa1111!", 10, async (err, hash) => {
      if (err) {
        console.log(err);
        res.send("Error hashing password in SaveUserInfo");
      } else {
        const result = await User.create({
          user_id: "admin1234",
          user_pw: hash,
          nickname: "admin",
          email: "admin",
          is_accept: true,
        });
      }
    });
  }
};
createAdminUser(); // 여기임

module.exports = db;
