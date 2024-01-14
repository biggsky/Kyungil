const Sequelize = require("sequelize");

class Comment extends Sequelize.Model {
  static init(seq) {
    return super.init(
      {
        detail: { type: Sequelize.STRING(500), allowNull: false },
      },
      {
        sequelize: seq,
        timestamps: true,
        modelName: "Comment",
        tableName: "comment",
        paranoid: true,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }

  static associate(db) {
    db.Comment.belongsTo(db.User, { foreignKey: "user_id", targetKey: "id" });
    db.Comment.belongsTo(db.Board, { foreignKey: "board_id", targetKey: "id" });
    db.Comment.hasMany(db.LikeComment, {
      foreignKey: "comment_id",
      sourceKey: "id",
    });
    db.Comment.hasMany(db.Recomment, {
      foreignKey: "comment_id",
      sourceKey: "id",
    });
  }
}

module.exports = { Comment };