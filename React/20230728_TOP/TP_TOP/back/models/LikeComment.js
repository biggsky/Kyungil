const Sequelize = require("sequelize");

class LikeComment extends Sequelize.Model {
  static init(seq) {
    return super.init(
      {
      },
      {
        sequelize: seq,
        timestamps: true,
        modelName: "LikeComment",
        tableName: "likeComment",
        paranoid: true,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }

  static associate(db) {
    db.LikeComment.belongsTo(db.User, { foreignKey: "user_id", targetKey: "id" });
    db.LikeComment.belongsTo(db.Board, { foreignKey: "comment_id", targetKey: "id" });
  }
}

module.exports = { LikeComment };
