const Sequelize = require("sequelize");

class LikeBoard extends Sequelize.Model {
  static init(seq) {
    return super.init(
      {
      },
      {
        sequelize: seq,
        timestamps: true,
        modelName: "LikeBoard",
        tableName: "likeBoard",
        paranoid: true,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }

  static associate(db) {
    db.LikeBoard.belongsTo(db.User, { foreignKey: "user_id", targetKey: "id" });
    db.LikeBoard.belongsTo(db.Board, { foreignKey: "board_id", targetKey: "id" });
  }
}

module.exports = { LikeBoard };
