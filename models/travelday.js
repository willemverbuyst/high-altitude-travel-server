'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class travelDay extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      travelDay.belongsTo(models.journey);
    }
  }
  travelDay.init(
    {
      date: DataTypes.STRING,
      from: DataTypes.STRING,
      to: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'travelDay',
    }
  );
  return travelDay;
};
