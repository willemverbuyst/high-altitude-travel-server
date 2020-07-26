'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class journey extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      journey.belongsTo(models.user);
    }
  }
  journey.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'journey',
    }
  );
  return journey;
};
