const Sequelize = require("sequelize");

class Recomment extends Sequelize.Model {
  static init(seq) {
    return super.init(
      {
        detail: { type: Sequelize.STRING(500), allowNull: false },
      },
      {
        sequelize: seq,
        timestamps: true,
        modelName: "Recomment",
        tableName: "recomment",
        paranoid: true,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }

  static associate(db) {
    db.Recomment.belongsTo(db.User, { foreignKey: "user_id", targetKey: "id" });
    db.Recomment.belongsTo(db.Comment, {
      foreignKey: "comment_id",
      targetKey: "id",
    });
    db.Recomment.hasMany(db.LikeRecomment, {
      foreignKey: "recomment_id",
      sourceKey: "id",
    });
  }
}

module.exports = { Recomment };