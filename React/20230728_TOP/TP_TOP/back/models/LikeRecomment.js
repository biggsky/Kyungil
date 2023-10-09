const Sequelize = require("sequelize");

class LikeRecomment extends Sequelize.Model {
  static init(seq) {
    return super.init(
      {},
      {
        sequelize: seq,
        timestamps: true,
        modelName: "LikeRecomment",
        tableName: "likeRecomment",
        paranoid: true,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }

  static associate(db) {
    db.LikeRecomment.belongsTo(db.User, {
      foreignKey: "user_id",
      targetKey: "id",
    });
    db.LikeRecomment.belongsTo(db.Recomment, {
      foreignKey: "recomment_id",
      targetKey: "id",
    });
  }
}

module.exports = { LikeRecomment };
