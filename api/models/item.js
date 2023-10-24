/* eslint-disable no-unused-vars */
const { Model } = require('sequelize');
const { ITEM_TYPES } = require('../constants');

module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Item.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
      comment: 'The item\'s name',
    },
    type: {
      type: DataTypes.ENUM,
      values: ITEM_TYPES,
      allowNull: false,
      comment: 'The item\'s type',
    },
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};
