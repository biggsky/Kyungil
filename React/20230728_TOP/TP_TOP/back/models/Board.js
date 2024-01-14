const Sequelize = require("sequelize");

class Board extends Sequelize.Model {
  static init(seq) {
    return super.init(
      {
        title: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        detail: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        likes: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        views: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        images: {
          type: Sequelize.STRING,
          allowNull: false,
        },
      
        nickname :{
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        plan_id: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
      },
      {
        sequelize: seq,
        timestamps: true,
        modelName: "Board",
        tableName: "board",
        paranoid: true,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }

  static associate(db) {
    db.Board.hasMany(db.Comment, { foreignKey: "board_id", sourceKey: "id" });
    db.Board.hasMany(db.LikeBoard, { foreignKey: "board_id", sourceKey: "id" });
    db.Board.belongsTo(db.User,{ foreignKey: "user_id", targetKey: "id" })
  }
}

module.exports = { Board };
