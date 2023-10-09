const Sequelize = require("sequelize");

class Attraction extends Sequelize.Model {
  static init(seq) {
    return super.init(
      {
        att_name: { type: Sequelize.STRING(80), allowNull: false },
        lat: { type: Sequelize.STRING(40), allowNull: false },
        lng: { type: Sequelize.STRING(40), allowNull: false },
        star: { type: Sequelize.INTEGER, allowNull: true },
        index: { type: Sequelize.INTEGER, allowNull: false },
        who: { type: Sequelize.STRING(20), allowNull: false },
        how: { type: Sequelize.STRING(20), allowNull: false },
        day: { type: Sequelize.INTEGER, allowNull: false },
      },
      {
        sequelize: seq,
        timestamps: true,
        modelName: "Attraction",
        tableName: "attraction",
        paranoid: true,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }

  static associate(db) {
    db.Attraction.belongsTo(db.Plan, {
      foreignKey: "plan_id",
      targetKey: "id",
    });
  }
}

module.exports = { Attraction };
