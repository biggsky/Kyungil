const Sequelize = require("sequelize");

class Plan extends Sequelize.Model {
  static init(seq) {
    return super.init(
      {
        duration: { type: Sequelize.TEXT, allowNull: false },
        plan: { type: Sequelize.STRING(30), allowNull: false },
      },
      {
        sequelize: seq,
        timestamps: true,
        modelName: "Plan",
        tableName: "plan",
        paranoid: true,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }

  static associate(db) {
    db.Plan.belongsTo(db.User, { foreignKey: "user_id", targetKey: "id" });
    db.Plan.hasMany(db.Attraction, { foreignKey: "plan_id", sourceKey: "id" });

  }
}

module.exports = { Plan };
