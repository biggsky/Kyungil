const Sequelize = require("sequelize");

class Notice extends Sequelize.Model {
  static init(seq) {
    return super.init(
      {
        sender: { type: Sequelize.STRING(20), allowNull: false },
        receiver: { type: Sequelize.STRING(20), allowNull: false },
        like_board: { type: Sequelize.BOOLEAN, allowNull: false },
        comment: { type: Sequelize.BOOLEAN, allowNull: false },
        like_comment: { type: Sequelize.BOOLEAN, allowNull: false },
        recomment: { type: Sequelize.BOOLEAN, allowNull: false },
        like_recomment: { type: Sequelize.BOOLEAN, allowNull: false },
        is_confirm: { type: Sequelize.BOOLEAN, allowNull: false },
      },
      {
        sequelize: seq,
        timestamps: true,
        modelName: "Notice",
        tableName: "notice",
        paranoid: true,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
}

module.exports = { Notice };
