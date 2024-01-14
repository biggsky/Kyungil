const Sequelize = require("sequelize");

class User extends Sequelize.Model {
  static init(seq) {
    return super.init(
      {
        user_id: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        user_pw: {
          type: Sequelize.STRING(200),
          allowNull: false,
        },
        nickname: {
          type: Sequelize.STRING(10),
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING(30),
          allowNull: false,
        },
        profile_img: {
          type: Sequelize.STRING(155),
          allowNull: true,
        },
        is_accept: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
        },
      },
      {
        sequelize: seq,
        timestamps: true,
        modelName: "User",
        tableName: "users",
        paranoid: true,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }

  static associate(db) {
    db.User.hasMany(db.Comment, { foreignKey: "user_id", sourceKey: "id" });
    db.User.hasMany(db.Plan, { foreignKey: "user_id", sourceKey: "id" });
    db.User.hasMany(db.Board, { foreignKey: "user_id", sourceKey: "id" });
  }
}

module.exports = { User };
